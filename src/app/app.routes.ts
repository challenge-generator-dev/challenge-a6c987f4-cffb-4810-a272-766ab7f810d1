import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { PerformanceService } from './core/services/performance.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    title: 'Dashboard | Financial Portal',
    providers: [
      {
        provide: PerformanceService,
        useFactory: (): PerformanceService => {
          const service = new PerformanceService();
          return service;
        },
      },
    ],
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./features/transactions/transactions.routes').then(
        (m) => m.TRANSACTIONS_ROUTES
      ),
    title: 'Transacciones | Financial Portal',
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./features/reports/reports.routes').then((m) => m.REPORTS_ROUTES),
    title: 'Reportes | Financial Portal',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    title: '404 - Página no encontrada | Financial Portal',
  },
];

routes.forEach((route: Routes[number]): void => {
  if (route.loadComponent) {
    const originalLoadComponent = route.loadComponent;
    route.loadComponent = async () => {
      const startTime: number = performance.now();
      const component = await originalLoadComponent();
      const loadTime: number = performance.now() - startTime;
      console.log(`[Route] ${route.path} loaded in ${loadTime.toFixed(2)}ms`);
      return component;
    };
  }
});