import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './components/table/table.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent, TableComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxPaginationModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,

    MaterialModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
