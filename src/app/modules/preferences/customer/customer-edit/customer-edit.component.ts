import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  row: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialogRef: MatDialogRef<CustomerEditComponent>
  ) {

    this.customerForm = this.fb.group({
      customerCode: [this.data.row.customerCode, Validators.required],
      customerName: [this.data.row.customerName, Validators.required],
      address: [this.data.row.address, Validators.required],
      tinNumber: [this.data.row.tinNumber, Validators.required],
      salesRepresentative: [this.data.row.salesRepresentative],
      terms: [this.data.row.terms, Validators.required],
      beginningBalance: [this.data.row.beginningBalance],
      contractDate: [this.data.row.contractDate],
      contactPerson: this.fb.group({
        name: [this.data.row.contactPerson.name],
        contactNumber: [this.data.row.contactPerson.contactNumber],
        primary: [this.data.row.contactPerson.primary]
      }),
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

    const id = this.data.row.id;
    this.apiService.updateRequest('/customer', id, form).subscribe(res => {
      console.log('HTTP response ', res);
      alert('Successfully updated');
      this.onClose();
    }
      , err => console.log('HTTP Error ', err)
    );
  }

  onClose() {
    this.dialogRef.close();
  }


}
