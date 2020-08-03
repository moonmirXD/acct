import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'add', component: CustomerAddComponent },
  { path: 'edit', component: CustomerEditComponent },
  { path: 'view/:id', component: CustomerViewComponent },
  { path: '', component: CustomerListComponent },
  { path: '**', component: PagenotfoundComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
