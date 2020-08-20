import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-access-list',
  templateUrl: './access-list.component.html',
  styleUrls: ['./access-list.component.scss']
})
export class AccessListComponent implements OnInit {
  showTable = false;
  lists: any;
  rows: any;
  noData: any;
  isLoading = true;

  configs = {
    userType: [
      { title: 'Accountant 1', value: 'Accountant 1' },
      { title: 'Accountant 2', value: 'Accountant 2' },
      { title: 'Accountant 3', value: 'Accountant 3' },
      { title: 'Accountant 4', value: 'Accountant 4' },
      { title: 'Admin 4', value: 'Admin 4' },
    ],
    class: [
      { title: 'All', value: 'All' },
      { title: 'Account', value: 'Account' },
      { title: 'Bank', value: 'Bank' },
      { title: 'Chart of Account', value: 'Chart of Account' },
      { title: 'Customer', value: 'Customer' },
      { title: 'Bank', value: 'Bank' },
      { title: 'Entry', value: 'Entry' },
      { title: 'Menu', value: 'Menu' },
      { title: 'Class', value: 'Class' },
      { title: 'Profile', value: 'Profile' },
      { title: 'Report', value: 'Report' },
      { title: 'Voucher', value: 'Voucher' },
      { title: 'Sales Representative', value: 'Sales Representative' },
      { title: 'Supplier', value: 'Supplier' },
      { title: 'Term', value: 'Term' },
      { title: 'User', value: 'User' },
    ]
  };
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'title', 'function', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getLists();
  }

  applyFilter(filterValue: string) {
    this.lists.filter = filterValue.trim().toLowerCase();
  }


  getLists() {
    this.apiService.getRequest('/customer').subscribe((res: any) => {
      this.rows = res;
      this.lists = new MatTableDataSource(this.rows);
      this.lists.paginator = this.paginator;
      this.lists.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.lists
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  /*  onView(row) {
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
   } */

}
