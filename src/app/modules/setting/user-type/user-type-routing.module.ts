import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTypeAddComponent } from './user-type-add/user-type-add.component';
import { UserTypeEditComponent } from './user-type-edit/user-type-edit.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';


const routes: Routes = [
  { path: 'add', component: UserTypeAddComponent },
  { path: 'edit', component: UserTypeEditComponent },
  { path: '', component: UserTypeListComponent },
  // { path: '**', component: PagenotfoundComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTypeRoutingModule { }
