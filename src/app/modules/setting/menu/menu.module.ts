import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuCopyComponent } from './menu-copy/menu-copy.component';
import { MenuViewComponent } from './menu-view/menu-view.component';


@NgModule({
  declarations: [MenuCopyComponent, MenuViewComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
