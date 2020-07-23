import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesAddComponent } from './sales-add/sales-add.component';
import { SalesEditComponent } from './sales-edit/sales-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SalesListComponent, SalesAddComponent, SalesEditComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    SalesAddComponent,
    SalesEditComponent
  ]
})
export class SalesModule { }
