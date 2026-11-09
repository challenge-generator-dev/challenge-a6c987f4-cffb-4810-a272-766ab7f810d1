export interface Environment {
  production: boolean;
  apiUrl: string;
  appVersion: string;
  features: FeatureFlags;
  performance: PerformanceConfig;
  thresholds: PerformanceThresholds;
  resources: ResourceConfig;
  ui: UIConfig;
  security: SecurityConfig;
  logging: LoggingConfig;
}

export interface FeatureFlags {
  enableDebugTools: boolean;
  enableAnalytics: boolean;
  enablePerformanceMonitoring: boolean;
  enableDetailedLogging: boolean;
}

export interface PerformanceConfig {
  enableLazyLoading: boolean;
  cacheEnabled: boolean;
  cacheMaxAge: number;
  prefetchEnabled: boolean;
  resourceHintsEnabled: boolean;
  virtualizationEnabled: boolean;
  imageOptimizationEnabled: boolean;
  cspEnabled: boolean;
}

export interface PerformanceThresholds {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  tti: number;
  tbt: number;
}

export interface ResourceConfig {
  cdnUrl: string;
  apiTimeout: number;
  maxConcurrentRequests: number;
  retryAttempts: number;
  retryDelay: number;
}

export interface UIConfig {
  defaultLanguage: string;
  supportedLanguages: string[];
  dateFormat: string;
  currency: string;
  theme: 'light' | 'dark';
  animationsEnabled: boolean;
}

export interface SecurityConfig {
  tokenRefreshInterval: number;
  sessionTimeout: number;
  enableCsrfProtection: boolean;
  allowedOrigins: string[];
}

export interface LoggingConfig {
  level: 'debug' | 'info' | 'warn' | 'error';
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint: string;
}