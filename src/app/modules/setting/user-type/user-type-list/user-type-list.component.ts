import { Component, OnInit, ViewChild } from '@angular/core';
import { UserTypeAddComponent } from '../user-type-add/user-type-add.component';
import { UserTypeEditComponent } from '../user-type-edit/user-type-edit.component';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-type-list',
  templateUrl: './user-type-list.component.html',
  styleUrls: ['./user-type-list.component.scss']
})
export class UserTypeListComponent implements OnInit {

  usersType: any;
  rows: any;
  noData: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'userType', 'userCode', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getUsersType();
  }

  applyFilter(filterValue: string) {
    this.usersType.filter = filterValue.trim().toLowerCase();
  }


  getUsersType() {
    this.apiService.getRequest('/usertype').subscribe((res: any) => {
      this.rows = res;
      this.usersType = new MatTableDataSource(this.rows);
      this.usersType.paginator = this.paginator;
      this.usersType.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.usersType
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  onView(row) {
    this.router.navigate(['pages/setting/user/view', row]);
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxHeight = '100vh';
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(UserTypeAddComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.getUsersType();
    });
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(UserTypeEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getUsersType();
    });
  }

  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/usertype', row).subscribe(res => {
        console.log('Deleted');
        this.getUsersType();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }

}
