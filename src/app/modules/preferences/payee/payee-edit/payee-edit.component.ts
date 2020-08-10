import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payee-edit',
  templateUrl: './payee-edit.component.html',
  styleUrls: ['./payee-edit.component.scss']
})
export class PayeeEditComponent implements OnInit {

  payeeForm: FormGroup;
  row: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialogRef: MatDialogRef<PayeeEditComponent>
  ) {

    this.payeeForm = this.fb.group({
      payeeName: [this.data.row.payeeName, Validators.required],

    });
  }

  ngOnInit(): void {

  }

  get f() { return this.payeeForm.controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.payeeForm.invalid) {
      return;
    }

    const id = this.data.row.id;
    this.apiService.updateRequest('/payee', id, form).subscribe(res => {
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
