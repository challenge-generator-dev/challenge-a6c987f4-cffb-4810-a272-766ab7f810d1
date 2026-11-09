import { ApplicationConfig, provideZoneChangeDetection, isDevMode, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouterTransition } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { PerformanceService } from './core/services/performance.service';
import { environment } from '../environments/environment';

function initializeApp(performanceService: PerformanceService): () => void {
  return () => {
    if (!isDevMode()) {
      performanceService.startCollecting();
    }
    console.log(`[${new Date().toISOString()}] Financial Portal initialized in ${environment.production ? 'production' : 'development'} mode`);
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
      withViewTransitions({
        skipInitialTransition: true,
      })
    ),
    
    provideHttpClient(
      withFetch(),
      withInterceptors([
        authInterceptor,
        errorInterceptor,
      ])
    ),
    
    provideAnimationsAsync(),
    
    provideRouterTransition(),
    
    PerformanceService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [PerformanceService],
      multi: true,
    },
    
    {
      provide: HTTP_INTERCEPTORS,
      useValue: authInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useValue: errorInterceptor,
      multi: true,
    },
    
    {
      provide: 'PERFORMANCE_CONFIG',
      useValue: {
        enableWebVitals: !isDevMode(),
        reportingEndpoint: environment.analyticsEndpoint,
        sampleRate: environment.production ? 1.0 : 0.1,
      },
    },
    {
      provide: 'CACHE_CONFIG',
      useValue: {
        maxSize: 100,
        maxAge: 300000,
        cacheStrategy: 'lru',
      },
    },
  ],
};