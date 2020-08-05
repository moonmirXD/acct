import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  details: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params): void => {
      this.apiService.getRequestById('/customer', params.id).subscribe(res => {
        this.details = res;
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