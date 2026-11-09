import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, signal, computed, effect, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PerformanceService } from '@app/core/services/performance.service';
import { TransactionCardComponent } from '@app/shared/components/transaction-card/transaction-card.component';

interface DashboardMetrics {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsRate: number;
}

interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  status: 'completed' | 'pending' | 'failed';
}

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, TransactionCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly performanceService = inject(PerformanceService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly isLoading = signal(true);
  readonly hasError = signal(false);
  readonly errorMessage = signal('');

  readonly metrics = signal<DashboardMetrics>({
    totalBalance: 0,
    monthlyIncome: 0,
    monthlyExpenses: 0,
    savingsRate: 0
  });

  readonly transactions = signal<Transaction[]>([]);
  readonly recentTransactions = computed(() => 
    this.transactions().slice(0, 5)
  );

  readonly quickActions: QuickAction[] = [
    { id: 'transfer', label: 'Transferir', icon: 'send', route: '/transfer' },
    { id: 'pay', label: 'Pagar servicios', icon: 'payment', route: '/payments' },
    { id: 'recharge', label: 'Recargar', icon: 'add_card', route: '/recharge' },
    { id: 'invest', label: 'Invertir', icon: 'trending_up', route: '/invest' }
  ];

  readonly isMobile = signal(window.innerWidth < 768);
  readonly sidebarCollapsed = signal(false);

  private readonly metricsEffect = effect(() => {
    const currentMetrics = this.metrics();
    if (currentMetrics.totalBalance > 0) {
      this.performanceService.generateReport({
        url: window.location.href,
        reportType: 'performance'
      }).catch(() => {});
    }
  });

  ngOnInit(): void {
    this.initializePerformanceMonitoring();
    this.loadDashboardData();
    this.setupResponsiveListener();
  }

  ngOnDestroy(): void {
    this.performanceService.stopCollecting();
  }

  private initializePerformanceMonitoring(): void {
    this.performanceService.startCollecting();
    this.performanceService.getMetricsAsObservable()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (metric) => {
          console.debug('[Dashboard] Métrica de rendimiento:', metric.name, metric.value);
        },
        error: (err) => {
          console.warn('[Dashboard] Error al收集ar métricas:', err);
        }
      });
  }

  private loadDashboardData(): void {
    this.isLoading.set(true);

    setTimeout(() => {
      this.metrics.set({
        totalBalance: 45892.50,
        monthlyIncome: 12500.00,
        monthlyExpenses: 8750.00,
        savingsRate: 30
      });

      this.transactions.set([
        {
          id: 'txn-001',
          date: new Date('2024-01-15'),
          description: 'Salario mensual',
          amount: 12500.00,
          category: 'income',
          type: 'income',
          status: 'completed'
        },
        {
          id: 'txn-002',
          date: new Date('2024-01-14'),
          description: 'Pago servicios luz',
          amount: -245.50,
          category: 'utilities',
          type: 'expense',
          status: 'completed'
        },
        {
          id: 'txn-003',
          date: new Date('2024-01-13'),
          description: 'Supermercado',
          amount: -1250.00,
          category: 'groceries',
          type: 'expense',
          status: 'completed'
        },
        {
          id: 'txn-004',
          date: new Date('2024-01-12'),
          description: 'Transferencia recibida',
          amount: 3000.00,
          category: 'transfer',
          type: 'income',
          status: 'completed'
        },
        {
          id: 'txn-005',
          date: new Date('2024-01-11'),
          description: 'Netflix suscripción',
          amount: -15.99,
          category: 'entertainment',
          type: 'expense',
          status: 'completed'
        }
      ]);

      this.isLoading.set(false);
      this.cdr.markForCheck();
    }, 300);
  }

  private setupResponsiveListener(): void {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      const handler = (e: MediaQueryListEvent) => this.isMobile.set(e.matches);
      mediaQuery.addEventListener('change', handler);
    }
  }

  toggleSidebar(): void {
    this.sidebarCollapsed.update(v => !v);
    this.cdr.markForCheck();
  }

  onQuickAction(action: QuickAction): void {
    console.log(`[Dashboard] Acción rápida seleccionada: ${action.id}`);
  }

  onTransactionClick(transaction: Transaction): void {
    console.log(`[Dashboard] Transacción seleccionada: ${transaction.id}`);
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-CO', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  }

  trackByTransaction(index: number, transaction: Transaction): string {
    return transaction.id;
  }

  trackByQuickAction(index: number, action: QuickAction): string {
    return action.id;
  }
}