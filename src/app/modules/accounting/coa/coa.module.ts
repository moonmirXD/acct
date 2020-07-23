import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoaRoutingModule } from './coa-routing.module';
import { CoaListComponent } from './coa-list/coa-list.component';
import { CoaAddGroupComponent } from './coa-add-group/coa-add-group.component';
import { CoaAddLedgerComponent } from './coa-add-ledger/coa-add-ledger.component';
import { CoaEditComponent } from './coa-edit/coa-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CoaListComponent, CoaAddGroupComponent, CoaAddLedgerComponent, CoaEditComponent],
  imports: [
    CommonModule,
    CoaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    CoaAddLedgerComponent,
    CoaAddGroupComponent
  ]
})
export class CoaModule { }
