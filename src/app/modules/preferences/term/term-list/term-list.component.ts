import { Component, OnInit, ViewChild } from '@angular/core';
import { TermEditComponent } from '../term-edit/term-edit.component';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { TermAddComponent } from '../term-add/term-add.component';

@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.scss']
})
export class TermListComponent implements OnInit {
  terms: any;
  rows: any;
  noData: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'termCode', 'termType', 'termDiscounts', 'termDays', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getTerms();
  }

  applyFilter(filterValue: string) {
    this.terms.filter = filterValue.trim().toLowerCase();
  }


  getTerms() {
    this.apiService.getRequest('/term').subscribe((res: any) => {
      this.rows = res;
      this.terms = new MatTableDataSource(this.rows);
      this.terms.paginator = this.paginator;
      this.terms.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.terms
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    const dialogRef = this.dialog.open(TermAddComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.getTerms();
    });
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(TermEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getTerms();
    });
  }

  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/term', row).subscribe(res => {
        console.log('Deleted');
        this.getTerms();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }
}
