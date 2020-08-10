import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivableRoutingModule } from './receivable-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReceivableRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReceivableModule { }
