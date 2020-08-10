import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payee-add',
  templateUrl: './payee-add.component.html',
  styleUrls: ['./payee-add.component.scss']
})
export class PayeeAddComponent implements OnInit {
  submitted = false;
  payeeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<PayeeAddComponent>
  ) {
    this.payeeForm = this.fb.group({
      payeeName: ['', Validators.required],
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

    this.apiService.postRequest('/payee', form).subscribe(res => {
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
