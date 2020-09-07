import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountCreateComponent } from '../account-create/account-create.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./account-manage.component.scss']
})
export class AccountManageComponent implements OnInit {

  systemName: any = environment.systemName;
  constructor(private apiService: ApiService, private dialog: MatDialog, private router: Router, private location: Location
  ) { }

  ngOnInit(): void {
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
  onBack() {
    this.location.back();
  }
  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/sales', row).subscribe(res => {
        console.log('Deleted');
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }
}
