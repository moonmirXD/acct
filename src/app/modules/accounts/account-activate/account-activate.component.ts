import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-account-activate',
  templateUrl: './account-activate.component.html',
  styleUrls: ['./account-activate.component.scss']
})
export class AccountActivateComponent implements OnInit {
  accounts: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount() {
    this.apiService.getRequest('/account').subscribe(res => {
      this.accounts = res;
    });
  }
  getAccountYear() {
    this.apiService.getRequest('/accoun/choose/').subscribe(res => {
      this.accounts = res;
    });
  }

}
