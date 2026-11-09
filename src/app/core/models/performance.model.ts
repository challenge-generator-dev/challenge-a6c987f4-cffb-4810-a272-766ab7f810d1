/**
 * Interfaces para el módulo de métricas de rendimiento.
 * Define los tipos de datos utilizados para representar métricas
 * de Core Web Vitals y opciones de reporte.
 */

/**
 * Representa una métrica de rendimiento individual recopilada
 * por el servicio de web vitals.
 */
export interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: PerformanceEntry[];
}

/**
 * Opciones de configuración para la generación de reportes
 * de rendimiento.
 */
export interface ReportOptions {
  includeEntries?: boolean;
  threshold?: 'strict' | 'lenient';
}

/**
 * Estructura de una entrada de rendimiento del navegador.
 * Extiende la interfaz nativa de PerformanceEntry.
 */
export interface PerformanceMetricEntry extends PerformanceEntry {
  processingStart?: number;
  hadRecentInput?: boolean;
  value?: number;
  startTime?: number;
  duration?: number;
  size?: number;
  transferSize?: number;
  latency?: number;
  url?: string;
  initiatorType?: string;
  renderTime?: number;
  loadTime?: number;
  domContentLoaded?: number;
  firstInterim?: number;
  maxFID?: number;
  eventName?: string;
  taskAttribution?: string;
}

/**
 * Tipo de callback para funciones de medición de web vitals.
 */
export type MetricCallback = (metric: Metric) => void;

/**
 * Configuración adicional para la recolección de métricas.
 */
export interface MetricReportOptions {
  reportAllChanges?: boolean;
  durationThreshold?: number;
  metricThreshold?: number;
}

/**
 * Resultado de la evaluación de una métrica contra
 * un threshold específico.
 */
export interface MetricEvaluation {
  metricName: string;
  value: number;
  threshold: number;
  passed: boolean;
  rating: 'good' | 'needs-improvement' | 'poor';
}