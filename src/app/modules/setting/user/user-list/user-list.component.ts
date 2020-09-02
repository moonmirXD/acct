import { Component, OnInit, ViewChild } from '@angular/core';
import { UserAddComponent } from '../user-add/user-add.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any;
  rows: any;
  noData: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'userCode', 'userName', 'userType', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getUsers();
  }

  applyFilter(filterValue: string) {
    this.users.filter = filterValue.trim().toLowerCase();
  }


  getUsers() {
    this.apiService.getRequest('/user').subscribe((res: any) => {
      this.rows = res;
      this.users = new MatTableDataSource(this.rows);
      this.users.paginator = this.paginator;
      this.users.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.users
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
    const dialogRef = this.dialog.open(UserAddComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.getUsers();
    });
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(UserEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getUsers();
    });
  }

  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/user', row).subscribe(res => {
        console.log('Deleted');
        this.getUsers();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }


}
