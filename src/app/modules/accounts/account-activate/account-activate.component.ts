import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountCreateComponent } from '../account-create/account-create.component';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';
import { SubscriptionLike } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-activate',
  templateUrl: './account-activate.component.html',
  styleUrls: ['./account-activate.component.scss']
})
export class AccountActivateComponent implements OnInit, OnDestroy {
  subscription: SubscriptionLike;
  activateForm: FormGroup;
  accounts: any;
  systemName: any = environment.systemName;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService,
    private spinner: NgxSpinnerService
  ) {
    this.activateForm = this.fb.group({
      year: [Validators.required],
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getAccounts();
  }

  ngOnDestroy() {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }

  getAccounts() {
    this.apiService.getRequest('/account').subscribe((res: any) => {
      this.accounts = res.data;
      console.log(res);

      this.spinner.hide();
    });
    // this.subscription = this.apiService.getRequest('/account').subscribe((res: any) => {
    //   this.accounts = res.data;
    //   console.log(res);

    //   this.spinner.hide();
    // });
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

  onSubmit(form) {
    const year = this.activateForm.value.year;
    this.apiService.getRequest(`/account/choose/${year}`).subscribe((res: any) => {
      console.log(res);
    });

    this.router.navigate([`pages/profile/${year}`]);
  }

}
