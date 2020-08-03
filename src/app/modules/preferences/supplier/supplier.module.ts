import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { MatNativeDateModule } from '@angular/material/core';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';

@NgModule({
  declarations: [SupplierListComponent, SupplierAddComponent, SupplierEditComponent, SupplierViewComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatNativeDateModule,
    NgxMatNativeDateModule
  ],
  providers: [
    NgxMatTimepickerModule
  ],
  entryComponents: [
    SupplierAddComponent,
    SupplierEditComponent
  ],
})
export class SupplierModule { }
