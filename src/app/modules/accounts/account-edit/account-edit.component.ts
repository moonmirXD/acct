import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {

  accountForm: FormGroup;
  row: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialogRef: MatDialogRef<AccountEditComponent>
  ) {

    this.accountForm = this.fb.group({
      name: [this.data.row.name, Validators.required],
      year: [this.data.row.year],
      isClosed: [this.data.row.isClosed],
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.accountForm.controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.accountForm.invalid) {
      return;
    }

    const id = this.data.row.id;
    this.apiService.updateRequest('/account', id, form).subscribe(res => {
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
