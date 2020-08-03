import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesAddComponent } from '../sales-add/sales-add.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-sales-edit',
  templateUrl: './sales-edit.component.html',
  styleUrls: ['./sales-edit.component.scss']
})
export class SalesEditComponent implements OnInit {
  formData: any;
  salesForm: FormGroup;
  row: any;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SalesEditComponent>
  ) {

    this.salesForm = this.fb.group({
      id: [this.data.row.id, Validators.required],
      name: this.fb.group({
        firstName: [this.data.row.name.firstName, Validators.required],
        middleName: [this.data.row.name.middleName, Validators.required],
        lastName: [this.data.row.name.lastName, Validators.required],
      }),
      email: [this.data.row.email, Validators.email],
      address: [this.data.row.address, Validators.required],
      contactNo: [this.data.row.contactNo, Validators.required],
    });
  }

  ngOnInit(): void {

  }


  onSubmit(form) {
    const id = this.data.row.id;
    this.apiService.updateRequest('/sales', id, form).subscribe(res => {
      console.log(res);
      alert('Successfully added');
      this.onClose();
    });
  }
  onClose() {
    this.dialogRef.close();
  }
}
