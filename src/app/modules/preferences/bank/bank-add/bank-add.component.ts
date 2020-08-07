import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.scss']
})
export class BankAddComponent implements OnInit {

  submitted = false;
  bankForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<BankAddComponent>
  ) {
    this.bankForm = this.fb.group({
      bankName: ['', Validators.required],
      bankCode: [''],
      glAccounts: [''],
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

    this.apiService.postRequest('/bank', form).subscribe(res => {
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
