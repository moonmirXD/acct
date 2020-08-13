import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebitMemoRoutingModule } from './debit-memo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DebitMemoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DebitMemoModule { }
