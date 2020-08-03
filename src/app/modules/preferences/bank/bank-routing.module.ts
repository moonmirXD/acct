import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankAddComponent } from './bank-add/bank-add.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'add', component: BankAddComponent },
  { path: 'edit', component: BankEditComponent },
  { path: '', component: BankListComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
