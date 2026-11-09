import { Routes } from '@angular/router';

export const REPORTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./reports-dashboard/reports-dashboard.component').then(
        (m) => m.ReportsDashboardComponent
      ),
    title: 'Panel de Reportes | Financial Portal',
  },
  {
    path: 'monthly',
    loadComponent: () =>
      import('./monthly-report/monthly-report.component').then(
        (m) => m.MonthlyReportComponent
      ),
    title: 'Reporte Mensual | Financial Portal',
  },
  {
    path: 'annual',
    loadComponent: () =>
      import('./annual-report/annual-report.component').then(
        (m) => m.AnnualReportComponent
      ),
    title: 'Reporte Anual | Financial Portal',
  },
];