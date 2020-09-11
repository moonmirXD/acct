import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { title } from 'process';
import { MatCardLgImage } from '@angular/material/card';
import { map } from 'rxjs/operators';
import { MenuConfig } from 'src/app/config/menu.config';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  config = this.menuConfig.defaults;
  panelOpenState = false;
  userData: any;

  constructor(private menuConfig: MenuConfig, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRequest('/user/profile').subscribe(res => {
      console.log('Successfully fetch');
      this.userData = res;
    }, err => {
      console.log(err);
    });
  }

}
