import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private REST_API_SERVER = environment.API_URL;
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public postRequest(path, body) {
    return this.http.post(this.REST_API_SERVER + path, body).pipe(catchError(this.handleError));
  }

  public getRequest(path) {
    return this.http.get(this.REST_API_SERVER + path).pipe(retry(3), catchError(this.handleError));
  }

  public getRequestById(path, id) {
    return this.http.get(this.REST_API_SERVER + path + '/' + id).pipe(retry(3), catchError(this.handleError));
  }

  public deleteRequest(path, id) {
    return this.http.delete(this.REST_API_SERVER + path + '/' + id).pipe(retry(3), catchError(this.handleError));
  }

  public updateRequest(path, id, body) {
    return this.http.patch(this.REST_API_SERVER + path + '/' + id, body).pipe(retry(3), catchError(this.handleError));
  }
}
