import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

import { SalesAddComponent } from '../sales-add/sales-add.component';
import { SalesEditComponent } from '../sales-edit/sales-edit.component';
import { SalesService } from 'src/app/core/services/preferences/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {
  rows: any;
  dataSource: any;
  noData: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private salesService: SalesService
  ) { }

  displayedColumns: string[] = ['number', 'id', 'name', 'email', 'contactNo', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.viewList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  viewList() {
    this.apiService.getRequest('/sales').subscribe((res: any) => {
      this.rows = res;
      this.dataSource = new MatTableDataSource(this.rows);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.dataSource
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  addSales() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(SalesAddComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.viewList();
    });
  }

  editSales(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(SalesEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.viewList();
    });
  }

  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/sales', row).subscribe(res => {
        console.log('Deleted');
        this.viewList();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }
}
