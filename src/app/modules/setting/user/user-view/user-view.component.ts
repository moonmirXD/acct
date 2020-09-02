import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  private routeSub: Subscription;
  details: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params): void => {
      this.apiService.getRequestById('/user', params.id).subscribe(res => {
        this.details = res;
      }, err => {
        console.log('HTTP error ', err);
      });
    });

  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
