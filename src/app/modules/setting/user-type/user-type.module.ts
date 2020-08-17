import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTypeRoutingModule } from './user-type-routing.module';
import { UserTypeAddComponent } from './user-type-add/user-type-add.component';
import { UserTypeEditComponent } from './user-type-edit/user-type-edit.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';



@NgModule({
  declarations: [UserTypeAddComponent, UserTypeEditComponent, UserTypeListComponent],
  imports: [
    CommonModule,
    UserTypeRoutingModule
  ]
})
export class UserTypeModule { }
