import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  rows: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.viewList();
  }
  viewList() {
    this.apiService.getRequest('/bank').subscribe(res => {
      console.log(res);
      this.rows = res;
    });
  }
}


