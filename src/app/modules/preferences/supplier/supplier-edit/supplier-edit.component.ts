import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.scss']
})
export class SupplierEditComponent implements OnInit {
  supplierForm: FormGroup;
  row: any;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SupplierEditComponent>
  ) {

    this.supplierForm = this.fb.group({
      supplierCode: [this.data.row.supplierCode, Validators.required],
      supplierName: [this.data.row.supplierName, Validators.required],
      address: [this.data.row.address, Validators.required],
      tinNo: [this.data.row.tinNo, Validators.required],
      vatStatus: [this.data.row.vatStatus, Validators.required],
      terms: [this.data.row.terms, Validators.required],
      bankAccount: [this.data.row.bankAccount, Validators.required],
      contractDate: [this.data.row.contractDate, Validators.required],
      contactPerson: this.fb.group({
        name: [this.data.row.contactPerson.name],
        contactNo: [this.data.row.contactPerson.contactNo],
        primary: [this.data.row.contactPerson.primary]
      }),
    });
  }

  ngOnInit(): void {

  }


  onSubmit(form) {
    const id = this.data.row.id;
    this.apiService.updateRequest('/supplier', id, form).subscribe(res => {
      console.log('HTTP response ', res);
      alert('Successfully added');
      this.onClose();
    }
      , err => console.log('HTTP Error ', err)
    );
  }
  onClose() {
    this.dialogRef.close();
  }
}
