import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermRoutingModule } from './term-routing.module';
import { TermAddComponent } from './term-add/term-add.component';
import { TermListComponent } from './term-list/term-list.component';
import { TermEditComponent } from './term-edit/term-edit.component';


@NgModule({
  declarations: [TermAddComponent, TermListComponent, TermEditComponent],
  imports: [
    CommonModule,
    TermRoutingModule
  ]
})
export class TermModule { }
