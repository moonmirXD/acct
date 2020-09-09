import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  version = environment.version;
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      ID: [''],
      password: ['']
    });
  }

  onSubmit(form) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.authenticationService.loginUser(form).subscribe(
        (res: any) => {
          alert('Successfully Login');
          localStorage.setItem('token', res.data.token);
          this.router.navigate(['/account']);
          console.log(res);
        },
        err => {
          alert('Something went wrong.');
          console.log(err);
        }
      );
    }
  }

}
