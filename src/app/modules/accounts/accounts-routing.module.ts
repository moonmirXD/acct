import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountActivateComponent } from './account-activate/account-activate.component';


const routes: Routes = [
  { path: '', component: AccountActivateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
