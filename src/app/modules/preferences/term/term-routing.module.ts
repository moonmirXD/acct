import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermAddComponent } from './term-add/term-add.component';
import { TermListComponent } from './term-list/term-list.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';
import { TermEditComponent } from './term-edit/term-edit.component';


const routes: Routes = [
  { path: 'add', component: TermAddComponent },
  { path: 'edit', component: TermEditComponent },
  { path: '', component: TermListComponent },
  { path: '**', component: PagenotfoundComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermRoutingModule { }
