import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

import { SupplierAddComponent } from '../supplier-add/supplier-add.component';
import { SupplierEditComponent } from '../supplier-edit/supplier-edit.component';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {
  supplierList: any;
  purchasingSupplierList: any;
  dataSourceSL: any;
  dataSourcePSL: any;
  noData: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  supplierListColumns: string[] = ['id', 'code', 'name', 'address', 'tinNo', 'contactPerson', 'number', 'actions'];

  purchasingSupplierListColumns: string[] = ['id', 'name', 'address', 'tinNo', 'contactPerson', 'number', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getSuppliers();
    this.getPurchasingSuppliers();
  }

  applyFilterSL(filterValue: string) {
    this.dataSourceSL.filter = filterValue.trim().toLowerCase();
  }
  applyFilterPSL(filterValue: string) {
    this.dataSourcePSL.filter = filterValue.trim().toLowerCase();
  }


  getSuppliers() {
    this.apiService.getRequest('/supplier').subscribe((res: any) => {
      this.supplierList = res;
      this.dataSourceSL = new MatTableDataSource(this.supplierList);
      this.dataSourceSL.paginator = this.paginator;
      this.dataSourceSL.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.dataSourceSL
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  getPurchasingSuppliers() {
    this.apiService.getRequest('/psupplier').subscribe((res: any) => {
      this.purchasingSupplierList = res;
      this.dataSourcePSL = new MatTableDataSource(this.purchasingSupplierList);
      this.dataSourcePSL.paginator = this.paginator;
      this.dataSourcePSL.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.dataSourcePSL
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  addSupplier() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(SupplierAddComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.getSuppliers();
    });
  }

  onViewSupplier(row) {
    this.router.navigate(['preferences/supplier/view', row]);
  }

  onEditSupplier(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(SupplierEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getSuppliers();
    });
  }

  onEditPurchasingSupplier(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(SupplierEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getSuppliers();
    });
  }

  onDeleteSupplier(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/supplier', row).subscribe(res => {
        console.log('Deleted');
        this.getSuppliers();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }

  onDeletePurchasingSupplier(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/psupplier', row).subscribe(res => {
        console.log('Deleted');
        this.getPurchasingSuppliers();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }
}