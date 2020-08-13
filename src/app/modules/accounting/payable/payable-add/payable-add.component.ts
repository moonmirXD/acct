import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payable-add',
  templateUrl: './payable-add.component.html',
  styleUrls: ['./payable-add.component.scss']
})
export class PayableAddComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  submitted = false;
  payableForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<PayableAddComponent>
  ) {
    this.payableForm = this.fb.group({
      bir: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      peNumber: [''],
      invoiceNumber: [''],
      supplier: ['', Validators.required],
      project: ['', Validators.required],
      dueDate: ['', Validators.required],
      reference: [''],
      remarks: [''],
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.payableForm.controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.payableForm.invalid) {
      return;
    }

    this.apiService.postRequest('/term', form).subscribe(res => {
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


