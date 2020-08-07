import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-term-edit',
  templateUrl: './term-edit.component.html',
  styleUrls: ['./term-edit.component.scss']
})
export class TermEditComponent implements OnInit {

  termForm: FormGroup;
  row: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialogRef: MatDialogRef<TermEditComponent>
  ) {

    this.termForm = this.fb.group({
      termCode: [this.data.row.termCode, Validators.required],
      termType: [this.data.row.termType, Validators.required],
      termDiscounts: [this.data.row.termDiscounts],
      termDays: [this.data.row.termDays, Validators.required],
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.termForm.controls; }
  get g() { return (this.termForm.get('contactPerson') as FormGroup).controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.termForm.invalid) {
      return;
    }

    const id = this.data.row.id;
    this.apiService.updateRequest('/term', id, form).subscribe(res => {
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
