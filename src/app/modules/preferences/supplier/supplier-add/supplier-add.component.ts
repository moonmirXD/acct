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
  public minDate: Date = new Date('05/07/1950');
  public maxDate: Date = new Date('05/27/2017');
  public dateValue: Date = new Date('05/16/2017');

  submitted = false;
  supplierForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<SupplierAddComponent>
  ) {
    this.supplierForm = this.fb.group({
      supplierCode: [''],
      supplierName: ['', Validators.required],
      address: ['', Validators.required],
      tinNo: ['', Validators.required],
      vatStatus: ['', Validators.required],
      terms: ['', Validators.required],
      bankAccount: ['', Validators.required],
      contractDate: ['', Validators.required],
      contactPerson: this.fb.group({
        name: [''],
        contactNo: [''],
        primary: ['']
      })
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.supplierForm.controls; }
  get g() { return (this.supplierForm.get('contactPerson') as FormGroup).controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.supplierForm.invalid) {
      return;
    }

    this.apiService.postRequest('/supplier', form).subscribe(res => {
      console.log(console.log('HTTP response ', res));
      alert('Successfully added');
      this.onClose();
    }, err => console.log('HTTP Error ', err)
    );
  }

  onClose() {
    this.dialogRef.close();
  }


}
