import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-type-edit',
  templateUrl: './user-type-edit.component.html',
  styleUrls: ['./user-type-edit.component.scss']
})
export class UserTypeEditComponent implements OnInit {

  userTypeForm: FormGroup;
  row: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialogRef: MatDialogRef<UserTypeEditComponent>
  ) {

    this.userTypeForm = this.fb.group({
      name: [this.data.row.name, Validators.required],
      code: [this.data.row.code, Validators.required],
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.userTypeForm.controls; }

  onSubmit(form) {
    this.submitted = true;

    if (this.userTypeForm.invalid) {
      return;
    }

    const id = this.data.row.id;
    this.apiService.updateRequest('/usertype', id, form).subscribe(res => {
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
