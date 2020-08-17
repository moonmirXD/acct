import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassAddComponent } from './class-add/class-add.component';
import { FunctionAddComponent } from './function-add/function-add.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassEditComponent } from './class-edit/class-edit.component';


@NgModule({
  declarations: [ClassAddComponent, FunctionAddComponent, ClassListComponent, ClassEditComponent],
  imports: [
    CommonModule,
    ClassRoutingModule
  ]
})
export class ClassModule { }
