import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayableAddComponent } from './payable-add/payable-add.component';
import { PayableEditComponent } from './payable-edit/payable-edit.component';
import { PayableListComponent } from './payable-list/payable-list.component';


const routes: Routes = [
  { path: 'add', component: PayableAddComponent },
  { path: 'edit', component: PayableEditComponent },
  { path: '', component: PayableListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayableRoutingModule { }
