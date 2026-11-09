import { Component, OnInit, Signal, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PerformanceService, PerformanceReport } from './core/services/performance.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly performanceService: PerformanceService;
  
  readonly isSidenavOpen: Signal<boolean> = signal(true);
  readonly isLoading: Signal<boolean> = signal(false);
  readonly currentRoute: Signal<string> = signal('/dashboard');
  
  readonly performanceMetrics: Signal<PerformanceReport | null> = signal(null);
  readonly isPerformanceCollecting: Signal<boolean> = signal(false);
  
  readonly navItems: NavItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Transacciones', route: '/transactions', icon: 'receipt_long' },
    { label: 'Reportes', route: '/reports', icon: 'assessment' },
    { label: 'Configuración', route: '/settings', icon: 'settings' },
  ];
  
  readonly appTitle: string = 'Financial Portal';
  readonly appVersion: string = '1.0.0';
  
  readonly sidenavMode: Signal<'side' | 'over'> = computed(() => {
    return window.innerWidth > 768 ? 'side' : 'over';
  });

  constructor(performanceService: PerformanceService) {
    this.performanceService = performanceService;
  }

  ngOnInit(): void {
    this.performanceService.startCollecting();
    this.isPerformanceCollecting.set(true);
    
    this.performanceService.getMetricsAsObservable().subscribe({
      next: (metrics: PerformanceReport) => {
        this.performanceMetrics.set(metrics);
      },
      error: (err: Error) => {
        console.error('Error collecting performance metrics:', err);
      },
    });
  }

  toggleSidenav(): void {
    this.isSidenavOpen.update((open: boolean) => !open);
  }

  closeSidenavOnMobile(): void {
    if (window.innerWidth <= 768) {
      this.isSidenavOpen.set(false);
    }
  }

  navigateTo(route: string): void {
    this.currentRoute.set(route);
    this.closeSidenavOnMobile();
  }

  async generatePerformanceReport(): Promise<void> {
    this.isLoading.set(true);
    try {
      const report: PerformanceReport = await this.performanceService.generateReport({
        includeMetrics: true,
        includeSuggestions: true,
        url: window.location.href,
      });
      this.performanceMetrics.set(report);
      console.log('Performance report generated:', report);
    } catch (error) {
      console.error('Failed to generate performance report:', error);
    } finally {
      this.isLoading.set(false);
    }
  }

  stopPerformanceCollection(): void {
    this.performanceService.stopCollecting();
    this.isPerformanceCollecting.set(false);
  }

  startPerformanceCollection(): void {
    this.performanceService.startCollecting();
    this.isPerformanceCollecting.set(true);
  }
}