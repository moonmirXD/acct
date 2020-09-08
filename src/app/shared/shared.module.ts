import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './components/table/table.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent, TableComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,

    MaterialModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
