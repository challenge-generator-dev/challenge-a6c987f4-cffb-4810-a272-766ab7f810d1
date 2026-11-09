import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appVersion: '0.0.1',
  features: {
    enableDebugTools: true,
    enableAnalytics: false,
    enablePerformanceMonitoring: true,
    enableDetailedLogging: true
  },
  performance: {
    enableLazyLoading: true,
    cacheEnabled: true,
    cacheMaxAge: 300000,
    prefetchEnabled: true,
    resourceHintsEnabled: true,
    virtualizationEnabled: true,
    imageOptimizationEnabled: false,
    cspEnabled: false
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
    cdnUrl: '',
    apiTimeout: 10000,
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
    allowedOrigins: ['http://localhost:4200']
  },
  logging: {
    level: 'debug',
    enableConsole: true,
    enableRemote: false,
    remoteEndpoint: ''
  }
};