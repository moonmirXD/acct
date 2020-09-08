import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountCreateComponent } from '../account-create/account-create.component';
import { Location } from '@angular/common';
import { SubscriptionLike } from 'rxjs';
import { AccountEditComponent } from '../account-edit/account-edit.component';
@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./account-manage.component.scss']
})
export class AccountManageComponent implements OnInit, OnDestroy {
  public p: any = 1;
  subscription: SubscriptionLike;
  accounts: any;
  systemName: any = environment.systemName;
  constructor(private apiService: ApiService, private dialog: MatDialog, private router: Router, private location: Location
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    const dialogRef = this.dialog.open(AccountCreateComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.getAccounts();
    });
  }
  onManageAccount() {
    this.router.navigate(['account/manage']);
  }
  onBack() {
    this.location.back();
  }
  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/sample', row).subscribe(res => {
        console.log('Deleted');
        this.getAccounts();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(AccountEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getAccounts();
    });
  }

  getAccounts() {
    this.subscription = this.apiService.getRequest('/account').subscribe((res: any) => {
      this.accounts = res.data;
      console.log(res);
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
