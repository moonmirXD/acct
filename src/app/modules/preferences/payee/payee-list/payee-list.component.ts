import { Component, OnInit, ViewChild } from '@angular/core';
import { PayeeAddComponent } from '../payee-add/payee-add.component';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { PayeeEditComponent } from '../payee-edit/payee-edit.component';

@Component({
  selector: 'app-payee-list',
  templateUrl: './payee-list.component.html',
  styleUrls: ['./payee-list.component.scss']
})
export class PayeeListComponent implements OnInit {

  payees: any;
  rows: any;
  noData: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'payeeCode', 'payeeName', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getPayees();
  }

  applyFilter(filterValue: string) {
    this.payees.filter = filterValue.trim().toLowerCase();
  }


  getPayees() {
    this.apiService.getRequest('/payee').subscribe((res: any) => {
      this.rows = res;
      this.payees = new MatTableDataSource(this.rows);
      this.payees.paginator = this.paginator;
      this.payees.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.payees
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    const dialogRef = this.dialog.open(PayeeAddComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.getPayees();
    });
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(PayeeEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getPayees();
    });
  }

  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/payee', row).subscribe(res => {
        console.log('Deleted');
        this.getPayees();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }


}
