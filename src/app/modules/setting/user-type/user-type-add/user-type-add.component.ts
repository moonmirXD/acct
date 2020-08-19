import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-type-add',
  templateUrl: './user-type-add.component.html',
  styleUrls: ['./user-type-add.component.scss']
})
export class UserTypeAddComponent implements OnInit {

  submitted = false;
  userTypeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<UserTypeAddComponent>
  ) {
    this.userTypeForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.userTypeForm.controls; }
  get g() { return (this.userTypeForm.get('contactPerson') as FormGroup).controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.userTypeForm.invalid) {
      return;
    }

    this.apiService.postRequest('/usertype', form).subscribe(res => {
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
