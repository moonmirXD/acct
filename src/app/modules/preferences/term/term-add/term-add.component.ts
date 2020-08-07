import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-term-add',
  templateUrl: './term-add.component.html',
  styleUrls: ['./term-add.component.scss']
})
export class TermAddComponent implements OnInit {

  submitted = false;
  termForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<TermAddComponent>
  ) {
    this.termForm = this.fb.group({
      termCode: ['', Validators.required],
      termType: ['', Validators.required],
      termDiscounts: [''],
      termDays: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.termForm.controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.termForm.invalid) {
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
