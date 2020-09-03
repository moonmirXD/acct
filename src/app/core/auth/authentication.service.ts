import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user) {
    return this.http.post<any>(this.API_URL + '/user/login', user);
  }
  loggedinUser() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
