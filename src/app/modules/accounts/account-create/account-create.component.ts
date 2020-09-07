import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {

  submitted = false;
  accountForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AccountCreateComponent>
  ) {
    this.accountForm = this.fb.group({
      year: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.accountForm.controls; }
  get g() { return (this.accountForm.get('name') as FormGroup).controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.accountForm.invalid) {
      return;
    }

    this.apiService.postRequest('/sample', form).subscribe(res => {
      console.log(res);
      alert('Successfully added');
      this.onClose();
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
