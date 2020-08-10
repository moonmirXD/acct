import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsAddComponent } from './projects-add/projects-add.component';
import { ProjectsEditComponent } from './projects-edit/projects-edit.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';


@NgModule({
  declarations: [ProjectsAddComponent, ProjectsEditComponent, ProjectsViewComponent, ProjectsListComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProjectsModule { }
