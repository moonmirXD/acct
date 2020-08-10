import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsEditComponent } from './projects-edit/projects-edit.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsAddComponent } from './projects-add/projects-add.component';



const routes: Routes = [
  { path: 'add', component: ProjectsAddComponent },
  { path: 'edit', component: ProjectsEditComponent },
  { path: '', component: ProjectsListComponent },
  { path: '**', component: PagenotfoundComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
