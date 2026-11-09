import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { PerformanceService, Metric } from './app/core/services/performance.service';
import { APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

class GlobalErrorHandler implements ErrorHandler {
  private readonly performanceService: PerformanceService;
  private readonly router: Router;

  constructor(performanceService: PerformanceService, router: Router) {
    this.performanceService = performanceService;
    this.router = router;
  }

  handleError(error: Error): void {
    const navigation = this.router.getCurrentNavigation();
    const errorContext = navigation?.extras?.state?.['errorContext'] || 'unknown';
    
    console.error('[GlobalErrorHandler] Error capturado:', {
      message: error.message,
      stack: error.stack,
      context: errorContext,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });

    const metric: Metric = {
      name: 'js_error',
      value: 1,
      rating: 'poor',
      delta: 1,
      id: `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      entries: []
    };

    if (this.performanceService && typeof this.performanceService['logError'] === 'function') {
      this.performanceService['logError'](error, errorContext);
    }

    throw error;
  }
}

function initializePerformanceMonitoring(performanceService: PerformanceService): () => void {
  return () => {
    const performanceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const metric: Metric = {
          name: entry.entryType,
          value: entry.startTime,
          rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs-improvement' : 'poor',
          delta: entry.startTime,
          id: `${entry.entryType}_${Date.now()}`,
          entries: [entry]
        };
        
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('[Performance] LCP detectado:', metric.value);
        } else if (entry.entryType === 'first-input') {
          console.log('[Performance] FID detectado:', metric.value);
        } else if (entry.entryType === 'layout-shift') {
          console.log('[Performance] CLS detectado:', metric.value);
        }
      }
    });

    try {
      performanceObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (e) {
      console.warn('[Performance] Algunos observadores no están disponibles en este navegador');
    }

    performanceService.startCollecting();

    return () => {
      performanceObserver.disconnect();
      performanceService.stopCollecting();
    };
  };
}

function trackRouteChanges(router: Router, performanceService: PerformanceService): void {
  router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigationTiming) {
      const ttfb = navigationTiming.responseStart - navigationTiming.requestStart;
      const loadComplete = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
      
      console.log('[Router] Navegación completada:', {
        url: event.urlAfterRedirects,
        ttfb: `${ttfb.toFixed(2)}ms`,
        loadComplete: `${loadComplete.toFixed(2)}ms`,
        type: 'NavigationEnd'
      });
    }

    if (typeof (performanceService as any).onRouteChange === 'function') {
      (performanceService as any).onRouteChange(event.urlAfterRedirects);
    }
  });
}

function getNavigationType(): string {
  const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navEntry) {
    const types: Record<number, string> = {
      0: 'navigate',
      1: 'reload',
      2: 'back_forward',
      255: 'prerender'
    };
    return types[navEntry.type] || 'unknown';
  }
  return 'unknown';
}

function initializeApp(performanceService: PerformanceService, router: Router): Promise<void> {
  return new Promise((resolve) => {
    const startTime = performance.now();
    const navType = getNavigationType();
    
    console.log('[Bootstrap] Iniciando aplicación Financial Portal...');
    console.log('[Bootstrap] Tipo de navegación:', navType);
    console.log('[Bootstrap] User Agent:', navigator.userAgent.substring(0, 50) + '...');

    trackRouteChanges(router, performanceService);

    const initializationCleanup = initializePerformanceMonitoring(performanceService);
    
    if (typeof (performanceService as any).setInitializationMetrics === 'function') {
      (performanceService as any).setInitializationMetrics({
        startTime,
        navType,
        timestamp: new Date().toISOString()
      });
    }

    resolve();

    window.addEventListener('beforeunload', () => {
      if (typeof initializationCleanup === 'function') {
        initializationCleanup();
      }
    });
  });
}

async function main(): Promise<void> {
  const container = document.getElementById('app');
  
  if (!container) {
    throw new Error('[Bootstrap] No se encontró el elemento #app en el DOM. Verifica que index.html contenga <app-root></app-root>');
  }

  console.log('[Bootstrap] Punto de entrada de Financial Portal');
  console.log('[Bootstrap] Versión: 0.0.1');
  console.log('[Bootstrap] Timestamp:', new Date().toISOString());

  try {
    await bootstrapApplication(AppComponent, appConfig)
      .then(appRef => {
        const performanceService = appRef.injector.get(PerformanceService);
        const router = appRef.injector.get(Router);
        
        return initializeApp(performanceService, router).then(() => appRef);
      })
      .then(appRef => {
        console.log('[Bootstrap] Aplicación bootstrap completada exitosamente');
        console.log('[Bootstrap] Componentes inicializados');
        
        const coreVersion = performance.getEntriesByType('resource')
          .filter(r => r.name.includes('main.js'))
          .map(r => ({ name: r.name, duration: r.duration }));
        
        if (coreVersion.length > 0) {
          console.log('[Bootstrap] Bundle principal cargado en:', coreVersion[0].duration.toFixed(2) + 'ms');
        }
        
        return appRef;
      });
  } catch (error) {
    console.error('[Bootstrap] Error crítico durante el bootstrap de la aplicación:', error);
    
    const errorContainer = document.createElement('div');
    errorContainer.style.cssText = 'padding: 40px; text-align: center; font-family: system-ui; background: #fff3f3; min-height: 100vh;';
    errorContainer.innerHTML = `
      <h1 style="color: #d32f2f; margin-bottom: 16px;">Error de Inicialización</h1>
      <p style="color: #666; margin-bottom: 24px;">La aplicación no pudo iniciarse correctamente.</p>
      <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; overflow: auto; text-align: left;">${error instanceof Error ? error.message : 'Error desconocido'}</pre>
      <button onclick="window.location.reload()" style="margin-top: 24px; padding: 12px 24px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">Reintentar</button>
    `;
    
    container.innerHTML = '';
    container.appendChild(errorContainer);
    
    throw error;
  }
}

main().catch(err => {
  console.error('[Bootstrap] Error no manejado en main():', err);
});