import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferencesComponent } from './preferences.component';


const routes: Routes = [
  {
    path: '',
    component: PreferencesComponent,
    children: [
      {
        path: 'bank',
        loadChildren: () =>
          import('./bank/bank.module').then((m) => m.BankModule),
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./customer/customer.module').then((m) => m.CustomerModule),
      },
      {
        path: 'payee',
        loadChildren: () =>
          import('./payee/payee.module').then((m) => m.PayeeModule),
      },
      {
        path: 'term',
        loadChildren: () =>
          import('./term/term.module').then((m) => m.TermModule),
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('./sales/sales.module').then((m) => m.SalesModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'cost',
        loadChildren: () =>
          import('./cost-center/cost-center.module').then((m) => m.CostCenterModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferencesRoutingModule { }
