import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankAddComponent } from './bank-add/bank-add.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BankAddComponent, BankListComponent, BankEditComponent],
  imports: [
    CommonModule,
    BankRoutingModule,
    NgxDatatableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BankModule { }
