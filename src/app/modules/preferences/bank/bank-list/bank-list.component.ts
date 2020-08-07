import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { BankAddComponent } from '../bank-add/bank-add.component';
import { BankEditComponent } from '../bank-edit/bank-edit.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  banks: any;
  rows: any;
  noData: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'bankCode', 'bankName', 'glAccounts', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getBanks();
  }

  applyFilter(filterValue: string) {
    this.banks.filter = filterValue.trim().toLowerCase();
  }


  getBanks() {
    this.apiService.getRequest('/bank').subscribe((res: any) => {
      this.rows = res;
      this.banks = new MatTableDataSource(this.rows);
      this.banks.paginator = this.paginator;
      this.banks.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.banks
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    const dialogRef = this.dialog.open(BankAddComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.getBanks();
    });
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(BankEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getBanks();
    });
  }

  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/bank', row).subscribe(res => {
        console.log('Deleted');
        this.getBanks();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }
}


