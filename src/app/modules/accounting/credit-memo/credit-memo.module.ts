import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditMemoRoutingModule } from './credit-memo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreditMemoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CreditMemoModule { }
