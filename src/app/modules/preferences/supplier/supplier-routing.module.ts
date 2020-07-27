import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';


const routes: Routes = [
  { path: 'add', component: SupplierAddComponent },
  { path: 'edit', component: SupplierEditComponent },
  { path: '', component: SupplierListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
