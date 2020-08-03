import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'add', component: SupplierAddComponent },
  { path: 'edit', component: SupplierEditComponent },
  { path: 'view/:id', component: SupplierViewComponent },
  { path: '', component: SupplierListComponent },
  { path: '**', component: PagenotfoundComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
