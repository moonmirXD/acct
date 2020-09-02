import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup;
  row: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialogRef: MatDialogRef<UserEditComponent>
  ) {

    this.userForm = this.fb.group({
      idNo: [this.data.row.idNo, Validators.required],
      firstName: [this.data.row.firstName, Validators.required],
      middleName: [this.data.row.middleName, Validators.required],
      lastName: [this.data.row.lastName, Validators.required],
      address: [this.data.row.address],
      contactNo: [this.data.row.contactNo],
      userType: [this.data.row.userType, Validators.required],
      email: [this.data.row.email, Validators.required],
      password: [this.data.row.password, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.userForm.controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    const id = this.data.row.id;
    this.apiService.updateRequest('/user', id, form).subscribe(res => {
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
