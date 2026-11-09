import { Routes } from '@angular/router';

export const TRANSACTIONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./transactions-list/transactions-list.component').then(
        (m) => m.TransactionsListComponent
      ),
    title: 'Lista de Transacciones | Financial Portal',
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./transaction-detail/transaction-detail.component').then(
        (m) => m.TransactionDetailComponent
      ),
    title: 'Detalle de Transacción | Financial Portal',
  },
];