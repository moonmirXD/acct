import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountCreateComponent } from '../account-create/account-create.component';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-account-activate',
  templateUrl: './account-activate.component.html',
  styleUrls: ['./account-activate.component.scss']
})
export class AccountActivateComponent implements OnInit, OnDestroy {
  subscription: SubscriptionLike;
  accounts: any;
  systemName: any = environment.systemName;
  constructor(private apiService: ApiService, private dialog: MatDialog, private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getAccounts() {
    this.subscription = this.apiService.getRequest('/account').subscribe(res => {
      this.accounts = res;
    });
  }
  getAccountYear() {
    this.apiService.getRequest('/account/choose/').subscribe(res => {
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
    this.router.navigate(['account/manage']);
  }

  onActivate() {
    this.router.navigate(['pages/profile']);
  }

}
