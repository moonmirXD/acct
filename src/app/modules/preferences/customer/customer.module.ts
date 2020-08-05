import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


@NgModule({
  declarations: [CustomerAddComponent, CustomerEditComponent, CustomerViewComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    CustomerAddComponent,
    CustomerEditComponent
  ]
})
export class CustomerModule { }
