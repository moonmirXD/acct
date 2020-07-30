import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.scss']
})
export class SalesAddComponent implements OnInit {
  submitted = false;
  salesForm: FormGroup;
  name: FormGroup;
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
  get g() { return (this.salesForm.get('name') as FormGroup).controls; }
  // get g() { return (this.salesForm.controls.name.controls as FormArray; }

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
