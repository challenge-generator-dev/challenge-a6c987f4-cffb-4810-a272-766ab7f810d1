import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  apiUrl: 'https://api.financial-portal.com/api',
  appVersion: '0.0.1',
  features: {
    enableDebugTools: false,
    enableAnalytics: true,
    enablePerformanceMonitoring: true,
    enableDetailedLogging: false
  },
  performance: {
    enableLazyLoading: true,
    cacheEnabled: true,
    cacheMaxAge: 900000,
    prefetchEnabled: true,
    resourceHintsEnabled: true,
    virtualizationEnabled: true,
    imageOptimizationEnabled: true,
    cspEnabled: true
  },
  thresholds: {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    fcp: 1800,
    ttfb: 800,
    tti: 3800,
    tbt: 200
  },
  resources: {
    cdnUrl: 'https://cdn.financial-portal.com',
    apiTimeout: 8000,
    maxConcurrentRequests: 6,
    retryAttempts: 3,
    retryDelay: 1000
  },
  ui: {
    defaultLanguage: 'es',
    supportedLanguages: ['es', 'en', 'pt'],
    dateFormat: 'DD/MM/YYYY',
    currency: 'EUR',
    theme: 'light',
    animationsEnabled: true
  },
  security: {
    tokenRefreshInterval: 300000,
    sessionTimeout: 1800000,
    enableCsrfProtection: true,
    allowedOrigins: ['https://financial-portal.com']
  },
  logging: {
    level: 'warn',
    enableConsole: false,
    enableRemote: true,
    remoteEndpoint: 'https://logs.financial-portal.com/api'
  }
};