import { Component, Input, ChangeDetectionStrategy, Signal, computed, effect, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  currency: string;
  type: 'credit' | 'debit';
  category: string;
  description: string;
  status: 'pending' | 'completed' | 'failed';
  merchantName?: string;
  merchantLogo?: string;
}

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    CurrencyPipe,
    DatePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent {
  @Input({ required: true }) transaction!: Transaction;
  @Input() compactMode = false;
  @Input() showDetails = true;

  private readonly amount = computed(() => this.transaction?.amount ?? 0);
  private readonly type = computed(() => this.transaction?.type ?? 'debit');
  private readonly status = computed(() => this.transaction?.status ?? 'pending');

  readonly isCredit: Signal<boolean> = computed(() => this.type() === 'credit');
  readonly isPending: Signal<boolean> = computed(() => this.status() === 'pending');
  readonly isFailed: Signal<boolean> = computed(() => this.status() === 'failed');
  readonly displayAmount: Signal<string> = computed(() => {
    const absAmount = Math.abs(this.amount());
    const prefix = this.isCredit() ? '+' : '-';
    return `${prefix}$${absAmount.toFixed(2)}`;
  });
  readonly amountClass: Signal<string> = computed(() => 
    this.isCredit() ? 'amount-positive' : 'amount-negative'
  );
  readonly formattedDate: Signal<string> = computed(() => {
    if (!this.transaction?.date) return '';
    return new Date(this.transaction.date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  });
  readonly categoryIcon: Signal<string> = computed(() => {
    const categoryIcons: Record<string, string> = {
      'shopping': 'shopping_cart',
      'food': 'restaurant',
      'transport': 'directions_car',
      'entertainment': 'movie',
      'utilities': 'receipt',
      'transfer': 'swap_horiz',
      'salary': 'payments',
      'other': 'attach_money'
    };
    return categoryIcons[this.transaction?.category?.toLowerCase()] || 'attach_money';
  });

  constructor() {
    effect(() => {
      const txn = this.transaction;
      if (txn) {
        console.debug(`[TransactionCard] Render for txn ${txn.id}, type: ${this.type()}`);
      }
    });
  }

  onCardClick(event: MouseEvent): void {
    event.preventDefault();
    console.debug(`[TransactionCard] Clicked transaction: ${this.transaction?.id}`);
  }

  trackByFn = (index: number, item: Transaction): string => item.id;
}