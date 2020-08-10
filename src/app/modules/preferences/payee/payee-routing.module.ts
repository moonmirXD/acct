import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayeeEditComponent } from './payee-edit/payee-edit.component';
import { PayeeAddComponent } from './payee-add/payee-add.component';
import { PayeeListComponent } from './payee-list/payee-list.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'add', component: PayeeAddComponent },
  { path: 'edit', component: PayeeEditComponent },
  { path: '', component: PayeeListComponent },
  { path: '**', component: PagenotfoundComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayeeRoutingModule { }
