import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostCenterRoutingModule } from './cost-center-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CostCenterRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CostCenterModule { }
