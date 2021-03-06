import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: any;
  rows: any;
  noData: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'customerCode', 'customerName', 'tinNumber', 'terms', 'contactPerson', 'contactNumber', 'salesRepresentative', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getCustomers();
  }

  applyFilter(filterValue: string) {
    this.customers.filter = filterValue.trim().toLowerCase();
  }


  getCustomers() {
    this.apiService.getRequest('/customer').subscribe((res: any) => {
      this.rows = res;
      this.customers = new MatTableDataSource(this.rows);
      this.customers.paginator = this.paginator;
      this.customers.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.customers
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  onView(row) {
    this.router.navigate(['pages/preferences/customer/view', row]);
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxHeight = '100vh';
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(CustomerAddComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.getCustomers();
    });
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(CustomerEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getCustomers();
    });
  }

  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/customer', row).subscribe(res => {
        console.log('Deleted');
        this.getCustomers();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }

}
