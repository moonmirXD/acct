import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayableRoutingModule } from './payable-routing.module';
import { PayableAddComponent } from './payable-add/payable-add.component';
import { PayableEditComponent } from './payable-edit/payable-edit.component';
import { PayableListComponent } from './payable-list/payable-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PayableAddComponent, PayableEditComponent, PayableListComponent],
  imports: [
    CommonModule,
    PayableRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    PayableAddComponent, PayableEditComponent
  ]
})
export class PayableModule { }
