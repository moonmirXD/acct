import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsEditComponent } from '../projects-edit/projects-edit.component';
import { ProjectsAddComponent } from '../projects-add/projects-add.component';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects: any;
  rows: any;
  noData: any;
  isLoading = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'projectCode', 'projectName', 'customer', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getProjects();
  }

  applyFilter(filterValue: string) {
    this.projects.filter = filterValue.trim().toLowerCase();
  }


  getProjects() {
    this.apiService.getRequest('/projects').subscribe((res: any) => {
      this.rows = res;
      this.projects = new MatTableDataSource(this.rows);
      this.projects.paginator = this.paginator;
      this.projects.sort = this.sort;
      console.log(res);

      this.isLoading = false;

      this.noData = this.projects
        .connect()
        .pipe(map((data: any) => data.length === 0));
    }, error => this.isLoading = false);
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    const dialogRef = this.dialog.open(ProjectsAddComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.getProjects();
    });
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(ProjectsEditComponent,
      {
        data: { row }
      });

    dialogRef.afterClosed().subscribe(res => {
      this.getProjects();
    });
  }

  onDelete(row) {
    if (confirm('Are you sure you want to delete this?')) {
      this.apiService.deleteRequest('/projects', row).subscribe(res => {
        console.log('Deleted');
        this.getProjects();
      });
    } else {
      console.log('Thing was not saved to the database.');
    }
  }

}
