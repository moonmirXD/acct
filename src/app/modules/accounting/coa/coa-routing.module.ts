import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoaAddGroupComponent } from './coa-add-group/coa-add-group.component';
import { CoaAddLedgerComponent } from './coa-add-ledger/coa-add-ledger.component';
import { CoaEditComponent } from './coa-edit/coa-edit.component';
import { CoaListComponent } from './coa-list/coa-list.component';


const routes: Routes = [
  { path: 'add-group', component: CoaAddGroupComponent },
  { path: 'add-ledger', component: CoaAddLedgerComponent },
  { path: 'edit', component: CoaEditComponent },
  { path: '', component: CoaListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoaRoutingModule { }
