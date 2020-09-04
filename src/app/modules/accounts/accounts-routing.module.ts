import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountActivateComponent } from './account-activate/account-activate.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';
import { AccountManageComponent } from './account-manage/account-manage.component';
import { AccountCreateComponent } from './account-create/account-create.component';


const routes: Routes = [
  { path: '', component: AccountActivateComponent },
  { path: 'manage', component: AccountManageComponent },
  { path: 'create', component: AccountCreateComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
