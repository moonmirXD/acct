import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-coa-add-group',
  templateUrl: './coa-add-group.component.html',
  styleUrls: ['./coa-add-group.component.scss']
})
export class CoaAddGroupComponent implements OnInit {
  submitted = false;
  groupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<CoaAddGroupComponent>
  ) {
    this.groupForm = this.fb.group({
      type: ['', Validators.required],
      GroupNumber: ['', Validators.required],
      GroupName: ['', Validators.required],
      parent: [''],
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.groupForm.controls; }
  get g() { return (this.groupForm.get('contactPerson') as FormGroup).controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.groupForm.invalid) {
      return;
    }

    this.apiService.postRequest('/coa', form).subscribe(res => {
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
