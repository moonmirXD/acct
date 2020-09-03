import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  profileData: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }


  getProfile() {
    this.apiService.getRequest('/user/profile').subscribe((res: any) => {
      this.profileData = res;
      console.log('HTTP response ', res);
    }, err => console.log('HTTP Error ', err));
  }
}
