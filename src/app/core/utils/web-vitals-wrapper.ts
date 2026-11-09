/**
 * Wrapper para la librería web-vitals.
 * Proporciona una interfaz unificada para la recolección
 * de Core Web Vitals con soporte para reset y callbacks.
 */

import {
  getCLS as webVitalsGetCLS,
  getFCP as webVitalsGetFCP,
  getFID as webVitalsGetFID,
  getLCP as webVitalsGetLCP,
  getTTFB as webVitalsGetTTFB,
  onCLS as webVitalsOnCLS,
  onFCP as webVitalsOnFCP,
  onFID as webVitalsOnFID,
  onLCP as webVitalsOnLCP,
  onTTFB as webVitalsOnTTFB,
  Metric as WebVitalsMetric,
  ReportCallback,
  ReportOptions as WebVitalsReportOptions
} from 'web-vitals';

/**
 * Interfaz que define el contrato del wrapper de web-vitals.
 */
export interface WebVitalsInterface {
  getCLS: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  getFCP: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  getFID: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  getLCP: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  getTTFB: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  onCLS: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  onFCP: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  onFID: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  onLCP: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  onTTFB: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  reset: () => void;
}

/**
 * Implementación del wrapper que encapsula la librería web-vitals
 * y proporciona funcionalidad de reset.
 */
class WebVitalsWrapper implements WebVitalsInterface {
  private isActive: boolean = false;
  private registeredCallbacks: Map<string, ReportCallback> = new Map();
  private registeredOptions: Map<string, WebVitalsReportOptions> = new Map();

  /**
   * Obtiene el Largest Contentful Paint (LCP).
   * Mide el tiempo de renderizado del elemento más grande visible.
   */
  getCLS(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('CLS', onReport);
    this.registeredOptions.set('CLS', options || {});
    this.isActive = true;
    webVitalsGetCLS(onReport, options);
  }

  /**
   * Obtiene el First Contentful Paint (FCP).
   * Mide el tiempo hasta que el primer contenido es renderizado.
   */
  getFCP(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('FCP', onReport);
    this.registeredOptions.set('FCP', options || {});
    this.isActive = true;
    webVitalsGetFCP(onReport, options);
  }

  /**
   * Obtiene el First Input Delay (FID).
   * Mide el tiempo de respuesta a la primera interacción del usuario.
   */
  getFID(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('FID', onReport);
    this.registeredOptions.set('FID', options || {});
    this.isActive = true;
    webVitalsGetFID(onReport, options);
  }

  /**
   * Obtiene el Largest Contentful Paint (LCP).
   * Mide el rendimiento de carga percibido por el usuario.
   */
  getLCP(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('LCP', onReport);
    this.registeredOptions.set('LCP', options || {});
    this.isActive = true;
    webVitalsGetLCP(onReport, options);
  }

  /**
   * Obtiene el Time To First Byte (TTFB).
   * Mide el tiempo de respuesta del servidor.
   */
  getTTFB(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('TTFB', onReport);
    this.registeredOptions.set('TTFB', options || {});
    this.isActive = true;
    webVitalsGetTTFB(onReport, options);
  }

  /**
   * Versión observador de CLS que reporta múltiples veces.
   */
  onCLS(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('onCLS', onReport);
    this.registeredOptions.set('onCLS', options || {});
    this.isActive = true;
    webVitalsOnCLS(onReport, options);
  }

  /**
   * Versión observador de FCP que reporta múltiples veces.
   */
  onFCP(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('onFCP', onReport);
    this.registeredOptions.set('onFCP', options || {});
    this.isActive = true;
    webVitalsOnFCP(onReport, options);
  }

  /**
   * Versión observador de FID que reporta múltiples veces.
   */
  onFID(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('onFID', onReport);
    this.registeredOptions.set('onFID', options || {});
    this.isActive = true;
    webVitalsOnFID(onReport, options);
  }

  /**
   * Versión observador de LCP que reporta múltiples veces.
   */
  onLCP(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('onLCP', onReport);
    this.registeredOptions.set('onLCP', options || {});
    this.isActive = true;
    webVitalsOnLCP(onReport, options);
  }

  /**
   * Versión observador de TTFB que reporta múltiples veces.
   */
  onTTFB(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('onTTFB', onReport);
    this.registeredOptions.set('onTTFB', options || {});
    this.isActive = true;
    webVitalsOnTTFB(onReport, options);
  }

  /**
   * Reinicia el estado del wrapper, limpiando todos los
   * callbacks registrados y deshabilitando la recolección.
   */
  reset(): void {
    this.registeredCallbacks.clear();
    this.registeredOptions.clear();
    this.isActive = false;
  }

  /**
   * Verifica si el wrapper está actualmente activo.
   */
  getIsActive(): boolean {
    return this.isActive;
  }

  /**
   * Obtiene el número de callbacks registrados.
   */
  getRegisteredCount(): number {
    return this.registeredCallbacks.size;
  }
}

/**
 * Instancia singleton del wrapper de web-vitals.
 */
export const webVitals: WebVitalsInterface = new WebVitalsWrapper();