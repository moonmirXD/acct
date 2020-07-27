import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeeRoutingModule } from './payee-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PayeeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PayeeModule { }
