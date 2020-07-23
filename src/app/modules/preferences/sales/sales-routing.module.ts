import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesAddComponent } from './sales-add/sales-add.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesEditComponent } from './sales-edit/sales-edit.component';


const routes: Routes = [
  { path: 'add', component: SalesAddComponent },
  { path: 'edit', component: SalesEditComponent },
  { path: '', component: SalesListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
