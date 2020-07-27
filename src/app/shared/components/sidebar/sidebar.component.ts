import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { title } from 'process';
import { MatCardLgImage } from '@angular/material/card';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  config = {
    accounting: [
      { text: 'Chart of Accounts', path: '/accounting/coa' },
      { text: 'Section 2', path: '/preferences/bank' },
      { text: 'Section 3', path: 'Third section' },
    ],
    preferences: [
      { text: 'Sales Representative', path: '/preferences/sales' },
      { text: 'Supplier', path: '/preferences/supplier' },
      { text: 'Section 3', path: 'Third section' },
    ]
  };


  // preferencesLinks: Array<{ text: string, path: string }> = [];
  // accountingLinks: Array<{ text: string, path: string }> = [];
  // accountsLinks: Array<{ text: string, path: string }> = [];
  // links: any;
  // bank: any;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {


  }

}
