import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjustmentRoutingModule } from './adjustment-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdjustmentRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdjustmentModule { }
