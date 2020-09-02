import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessListComponent } from './access-list/access-list.component';


const routes: Routes = [
  { path: '', component: AccessListComponent },
  // { path: '**', component: PagenotfoundComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
