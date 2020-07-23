import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'adjustment',
    loadChildren: () =>
      import('./adjustment/adjustment.module').then((m) => m.AdjustmentModule),
  },
  {
    path: 'check',
    loadChildren: () =>
      import('./check/check.module').then((m) => m.CheckModule),
  },
  {
    path: 'coa',
    loadChildren: () =>
      import('./coa/coa.module').then((m) => m.CoaModule),
  },
  {
    path: 'credit-memo',
    loadChildren: () =>
      import('./credit-memo/credit-memo.module').then((m) => m.CreditMemoModule),
  },
  {
    path: 'debit-memo',
    loadChildren: () =>
      import('./debit-memo/debit-memo.module').then((m) => m.DebitMemoModule),
  },
  {
    path: 'payable',
    loadChildren: () =>
      import('./payable/payable.module').then((m) => m.PayableModule),
  },
  {
    path: 'receipt',
    loadChildren: () =>
      import('./receipt/receipt.module').then((m) => m.ReceiptModule),
  },
  {
    path: 'receivable',
    loadChildren: () =>
      import('./receivable/receivable.module').then((m) => m.ReceivableModule),
  },
  {
    path: 'voucher',
    loadChildren: () =>
      import('./voucher/voucher.module').then((m) => m.VoucherModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
