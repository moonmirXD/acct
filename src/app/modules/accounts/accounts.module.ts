import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountActivateComponent } from './account-activate/account-activate.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountManageComponent } from './account-manage/account-manage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccountActivateComponent, AccountCreateComponent, AccountManageComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AccountCreateComponent]
})
export class AccountsModule { }
