import { Injectable } from '@angular/core';
import { ApiService } from '../../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  constructor(private apiService: ApiService) { }


  getSales() {
    const forms = this.apiService.getRequest('/sales');
    return forms;
  }
}
