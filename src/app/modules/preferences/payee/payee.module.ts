import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeeRoutingModule } from './payee-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PayeeAddComponent } from './payee-add/payee-add.component';
import { PayeeListComponent } from './payee-list/payee-list.component';
import { PayeeEditComponent } from './payee-edit/payee-edit.component';


@NgModule({
  declarations: [PayeeAddComponent, PayeeListComponent, PayeeEditComponent],
  imports: [
    CommonModule,
    PayeeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PayeeModule { }
