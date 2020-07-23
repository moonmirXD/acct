import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.scss']
})
export class SalesAddComponent implements OnInit {
  salesForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<SalesAddComponent>
  ) {
    this.salesForm = this.fb.group({
      id: ['', Validators.required],
      name: this.fb.group({
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),
      email: ['', Validators.email],
      address: ['', Validators.required],
      contactNo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.apiService.postRequest('/sales', form).subscribe(res => {
      console.log(res);
      alert('Successfully added');
      this.onClose();
    });
  }
  onClose() {
    this.dialogRef.close();
  }
}
