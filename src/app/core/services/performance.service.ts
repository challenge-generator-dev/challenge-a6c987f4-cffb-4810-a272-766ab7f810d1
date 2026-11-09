import { Injectable, signal, effect, Signal, EnvironmentInjector, inject } from '@angular/core';
import { Metric, ReportOptions } from '../models/performance.model';
import { webVitals } from '../utils/web-vitals-wrapper';
import { environment } from '@environments/environment';

/**
 * Servicio central para la medición y reporte de métricas de rendimiento.
 * Implementa la recolección de Core Web Vitals y métricas personalizadas.
 * Utiliza Angular Signals para notificación reactiva de cambios en métricas.
 */
@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private readonly environmentInjector = inject(EnvironmentInjector);
  
  private readonly lcp = signal<Metric | null>(null);
  private readonly fid = signal<Metric | null>(null);
  private readonly cls = signal<Metric | null>(null);
  private readonly ttfb = signal<Metric | null>(null);
  private readonly fcp = signal<Metric | null>(null);

  public readonly metrics: Signal<Record<string, Metric | null>> = signal({
    lcp: this.lcp(),
    fid: this.fid(),
    cls: this.cls(),
    ttfb: this.ttfb(),
    fcp: this.fcp()
  });

  private isCollecting = false;

  constructor() {
    effect(() => {
      this.metrics.set({
        lcp: this.lcp(),
        fid: this.fid(),
        cls: this.cls(),
        ttfb: this.ttfb(),
        fcp: this.fcp()
      });
    });
  }

  public startCollecting(): void {
    if (this.isCollecting) return;
    this.isCollecting = true;

    webVitals.getLCP((metric) => {
      this.lcp.set({
        name: 'LCP',
        value: metric.value,
        rating: metric.value <= 2500 ? 'good' : metric.value <= 4000 ? 'needs-improvement' : 'poor',
        delta: metric.delta,
        entries: metric.entries
      });
    }, { reportAllChanges: true });

    webVitals.getFID((metric) => {
      this.fid.set({
        name: 'FID',
        value: metric.value,
        rating: metric.value <= 100 ? 'good' : metric.value <= 300 ? 'needs-improvement' : 'poor',
        delta: metric.delta,
        entries: metric.entries
      });
    });

    webVitals.getCLS((metric) => {
      this.cls.set({
        name: 'CLS',
        value: metric.value,
        rating: metric.value <= 0.1 ? 'good' : metric.value <= 0.25 ? 'needs-improvement' : 'poor',
        delta: metric.delta,
        entries: metric.entries
      });
    });

    webVitals.getTTFB((metric) => {
      this.ttfb.set({
        name: 'TTFB',
        value: metric.value,
        rating: metric.value <= 800 ? 'good' : metric.value <= 1800 ? 'needs-improvement' : 'poor',
        delta: metric.delta,
        entries: metric.entries
      });
    });

    webVitals.getFCP((metric) => {
      this.fcp.set({
        name: 'FCP',
        value: metric.value,
        rating: metric.value <= 1800 ? 'good' : metric.value <= 3000 ? 'needs-improvement' : 'poor',
        delta: metric.delta,
        entries: metric.entries
      });
    });
  }

  public stopCollecting(): void {
    if (!this.isCollecting) return;
    webVitals.reset();
    this.isCollecting = false;
  }

  public async generateReport(options: ReportOptions = {}): Promise<PerformanceReport> {
    const defaultOptions: ReportOptions = {
      includeEntries: false,
      threshold: 'strict',
      ...options
    };

    const currentMetrics = this.metrics();
    const report: PerformanceReport = {
      timestamp: new Date().toISOString(),
      environment: environment.environmentName,
      metrics: {},
      summary: {
        score: 0,
        passed: 0,
        failed: 0,
        total: 0
      }
    };

    const thresholds = {
      lcp: defaultOptions.threshold === 'strict' ? 2500 : 4000,
      fid: defaultOptions.threshold === 'strict' ? 100 : 300,
      cls: defaultOptions.threshold === 'strict' ? 0.1 : 0.25,
      ttfb: defaultOptions.threshold === 'strict' ? 800 : 1800,
      fcp: defaultOptions.threshold === 'strict' ? 1800 : 3000
    };

    let score = 0;
    let passed = 0;
    let total = 0;

    for (const [key, metric] of Object.entries(currentMetrics)) {
      if (metric) {
        report.metrics[key] = {
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          isPassed: metric.value <= thresholds[key as keyof typeof thresholds],
          ...(defaultOptions.includeEntries ? { entries: metric.entries } : {})
        };

        total++;
        if (report.metrics[key].isPassed) {
          passed++;
          score += 1;
        }
      }
    }

    report.summary = {
      score: total > 0 ? Math.round((score / total) * 100) : 0,
      passed,
      failed: total - passed,
      total
    };

    if (environment.analyticsEnabled) {
      await this.sendToAnalytics(report);
    }

    return report;
  }

  private async sendToAnalytics(report: PerformanceReport): Promise<void> {
    try {
      console.log('[PerformanceService] Enviando reporte a analytics:', report);
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error('[PerformanceService] Error al enviar reporte a analytics:', error);
    }
  }

  public getMetricsAsObservable() {
    return new PerformanceObservable<Record<string, Metric | null>>(subscriber => {
      subscriber.next(this.metrics());
      const subscription = effect(() => {
        subscriber.next(this.metrics());
      });
      return () => subscription.destroy();
    });
  }

  public getMetricValue(metricName: string): number | null {
    const currentMetrics = this.metrics();
    const metric = currentMetrics[metricName];
    return metric ? metric.value : null;
  }

  public getMetricRating(metricName: string): 'good' | 'needs-improvement' | 'poor' | null {
    const currentMetrics = this.metrics();
    const metric = currentMetrics[metricName];
    return metric ? metric.rating : null;
  }

  public isCollectingMetrics(): boolean {
    return this.isCollecting;
  }
}

export interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: PerformanceEntry[];
}

export interface ReportOptions {
  includeEntries?: boolean;
  threshold?: 'strict' | 'lenient';
}

export interface PerformanceReport {
  timestamp: string;
  environment: string;
  metrics: {
    [key: string]: {
      name: string;
      value: number;
      rating: 'good' | 'needs-improvement' | 'poor';
      isPassed: boolean;
      entries?: PerformanceEntry[];
    };
  };
  summary: {
    score: number;
    passed: number;
    failed: number;
    total: number;
  };
}

class PerformanceObservable<T> {
  constructor(private subscribeFn: (subscriber: PerformanceSubscriber<T>) => () => void) {}

  subscribe(observer: Partial<PerformanceObserver<T>>): PerformanceSubscription {
    const subscriber = new PerformanceSubscriber(observer);
    const unsubscribe = this.subscribeFn(subscriber);
    return { unsubscribe };
  }
}

class PerformanceSubscriber<T> {
  constructor(private observer: Partial<PerformanceObserver<T>>) {}

  next(value: T): void {
    if (this.observer.next) this.observer.next(value);
  }
}

interface PerformanceObserver<T> {
  next: (value: T) => void;
  error?: (err: any) => void;
  complete?: () => void;
}

interface PerformanceSubscription {
  unsubscribe: () => void;
}