import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.scss']
})
export class BankEditComponent implements OnInit {

  bankForm: FormGroup;
  row: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialogRef: MatDialogRef<BankEditComponent>
  ) {

    this.bankForm = this.fb.group({
      bankName: [this.data.row.termType, Validators.required],
      bankCode: [this.data.row.termCode],
      glAccounts: [this.data.row.termDiscounts],
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.bankForm.controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.bankForm.invalid) {
      return;
    }

    const id = this.data.row.id;
    this.apiService.updateRequest('/bank', id, form).subscribe(res => {
      console.log('HTTP response ', res);
      alert('Successfully Updated');
      this.onClose();
    }
      , err => console.log('HTTP Error ', err)
    );
  }

  onClose() {
    this.dialogRef.close();
  }

}
