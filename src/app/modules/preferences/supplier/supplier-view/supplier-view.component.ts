import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from 'src/app/core/http/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.scss']
})
export class SupplierViewComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  supplierDetails: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params): void => {
      this.apiService.getRequestById('/supplier', params.id).subscribe(res => {
        this.supplierDetails = res;
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
