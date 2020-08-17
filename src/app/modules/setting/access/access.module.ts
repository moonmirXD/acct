import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessListComponent } from './access-list/access-list.component';


@NgModule({
  declarations: [AccessListComponent],
  imports: [
    CommonModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
