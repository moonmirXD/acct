import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SalesAddComponent } from '../../sales/sales-add/sales-add.component';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent implements OnInit {

  submitted = false;
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
      email: ['', [Validators.email, Validators.required]],
      address: ['', Validators.required],
      contactNo: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.salesForm.controls; }
  get g() { return (this.salesForm.get('name') as FormArray).controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.salesForm.invalid) {
      return;
    }

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
