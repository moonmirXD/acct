import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { title } from 'process';
import { MatCardLgImage } from '@angular/material/card';
import { map } from 'rxjs/operators';
import { MenuConfig } from 'src/app/config/menu.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  config = this.menuConfig.defaults;
  panelOpenState = false;

  constructor(private menuConfig: MenuConfig) { }

  ngOnInit(): void {
  }

}
