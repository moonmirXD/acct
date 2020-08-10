import { Component, OnInit, ViewChild } from '@angular/core';
import { PayableEditComponent } from '../payable-edit/payable-edit.component';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { PayableAddComponent } from '../payable-add/payable-add.component';

@Component({
  selector: 'app-payable-list',
  templateUrl: './payable-list.component.html',
  styleUrls: ['./payable-list.component.scss']
})
export class PayableListComponent implements OnInit {
  openRows: any;
  closedRows: any;
  openPayables: any;
  closedPayables: any;
  noData: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  openColumns: string[] = ['invoiceDate', 'peNumber', 'dueDate', 'supplier', 'tinNumber', 'reference', 'remarks', 'amountDue', 'actions'];

  closedColumns: string[] = ['invoiceDate', 'peNumber', 'dueDate', 'supplier', 'tinNumber', 'reference', 'remarks', 'amountDue', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getOpenPayables();
    this.getClosedPayables();
  }

  applyFilterOpen(filterValue: string) {
    this.openPayables.filter = filterValue.trim().toLowerCase();
  }
  applyFilterClosed(filterValue: string) {
    this.closedPayables.filter = filterValue.trim().toLowerCase();
  }


  getOpenPayables() {
    this.apiService.getRequest('/open-payable').subscribe((res: any) => {
      this.openRows = res;
      this.openPayables = new MatTableDataSource(this.openRows);
      this.openPayables.paginator = this.paginator;
      this.openPayables.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.openPayables
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  getClosedPayables() {
    this.apiService.getRequest('/closed-payable').subscribe((res: any) => {
      this.closedRows = res;
      this.closedPayables = new MatTableDataSource(this.closedRows);
      this.closedPayables.paginator = this.paginator;
      this.closedPayables.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.closedPayables
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(PayableAddComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.getOpenPayables();
    });
  }

  onView(row) {
    this.router.navigate(['accounting/payables/view', row]);
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(PayableEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getOpenPayables();
    });
  }

  onEditPurchasingSupplier(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(PayableEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getOpenPayables();
    });
  }

  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/payable', row).subscribe(res => {
        console.log('Deleted');
        this.getOpenPayables();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }

  onDeletePurchasingSupplier(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/psupplier', row).subscribe(res => {
        console.log('Deleted');
        this.getClosedPayables();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }

}
