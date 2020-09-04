import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountActivateComponent } from './account-activate/account-activate.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountManageComponent } from './account-manage/account-manage.component';


@NgModule({
  declarations: [AccountActivateComponent, AccountCreateComponent, AccountManageComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
