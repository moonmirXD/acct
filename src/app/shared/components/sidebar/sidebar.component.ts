import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { title } from 'process';
import { MatCardLgImage } from '@angular/material/card';
import { map } from 'rxjs/operators';
import { MenuConfig } from 'src/app/config/menu.config';
import { ApiService } from 'src/app/core/http/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  config = this.menuConfig.defaults;
  panelOpenState = false;
  userData: any;
  year: any;

  constructor(private menuConfig: MenuConfig, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);

    this.apiService.getRequest('/user/profile').subscribe(res => {
      console.log('Successfully fetch');
      this.userData = res;

    }, err => {
      console.log(err);
    });


  }

}
