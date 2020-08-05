import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  public minDate: Date = new Date('05/07/1950');
  public maxDate: Date = new Date('05/27/2017');
  public dateValue: Date = new Date('05/16/2017');

  submitted = false;
  customerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<CustomerAddComponent>
  ) {
    this.customerForm = this.fb.group({
      customerCode: [''],
      customerName: ['', Validators.required],
      address: ['', Validators.required],
      salesRepresentative: [''],
      terms: ['', Validators.required],
      tinNumber: ['', Validators.required],
      contractDate: [''],
      beginningBalance: [''],
      contactPerson: this.fb.group({
        name: [''],
        contactNo: [''],
        primary: ['']
      })
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.customerForm.controls; }
  get g() { return (this.customerForm.get('contactPerson') as FormGroup).controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.customerForm.invalid) {
      return;
    }

    this.apiService.postRequest('/customer', form).subscribe(res => {
      console.log('HTTP response ', res);
      alert('Successfully added');
      this.onClose();
    }, err => console.log('HTTP Error ', err)
    );
  }

  onClose() {
    this.dialogRef.close();
  }


}
