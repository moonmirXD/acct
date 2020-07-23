import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/core/http/api.service';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CoaAddLedgerComponent } from '../coa-add-ledger/coa-add-ledger.component';
import { CoaAddGroupComponent } from '../coa-add-group/coa-add-group.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-coa-list',
  templateUrl: './coa-list.component.html',
  styleUrls: ['./coa-list.component.scss']
})
export class CoaListComponent implements OnInit {
  rows: any;
  dataSource: any;
  noData: any;
  isLoading = true;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'accountName', 'type', 'opBalance', 'clBalance', 'actions'];
  // dataSource = new MatTableDataSource(this.rows);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.viewList();
  }

  viewList() {
    this.apiService.getRequest('/coa').subscribe((res: any) => {
      this.rows = res;
      this.dataSource = new MatTableDataSource(this.rows);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.isLoading = false;

      this.noData = this.dataSource
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  addGroup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CoaAddGroupComponent);
  }

  addLedger() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CoaAddLedgerComponent);
  }
}

