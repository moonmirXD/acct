import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountCreateComponent } from '../account-create/account-create.component';

@Component({
  selector: 'app-account-activate',
  templateUrl: './account-activate.component.html',
  styleUrls: ['./account-activate.component.scss']
})
export class AccountActivateComponent implements OnInit {
  accounts: any;
  systemName: any = environment.systemName;
  constructor(private apiService: ApiService, private dialog: MatDialog, private router: Router
  ) { }

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

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    const dialogRef = this.dialog.open(AccountCreateComponent);

    dialogRef.afterClosed().subscribe(res => {
    });
  }
  onManageAccount() {
    this.router.navigate(['manage']);
  }

}
