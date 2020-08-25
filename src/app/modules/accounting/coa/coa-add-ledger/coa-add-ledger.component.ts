import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-coa-add-ledger',
  templateUrl: './coa-add-ledger.component.html',
  styleUrls: ['./coa-add-ledger.component.scss']
})
export class CoaAddLedgerComponent implements OnInit {
  ledgerForm: FormGroup;
  opBalanceName: any;
  groupName: any;
  checked: boolean;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.ledgerForm = this.fb.group({
      group: ['', Validators.required],
      number: ['', Validators.required],
      name: ['', Validators.required],
      openingBalance: [''],
      amount: ['', Validators.required],
      description: [''],
      isCashAccount: ['true', Validators.required]
    });
  }

  groups = [
    { text: 2, value: 'Group1' },
    { text: 3, value: 'Group2' }
  ];

  openingBalances = [
    { text: 'Cr', value: 'Cr' },
    { text: 'Dr', value: 'Dr' }
  ];

  onNotCashAccount() {
    this.ledgerForm.patchValue({
      isCashAccount: 'false'
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.ledgerForm.controls; }

  onSubmit(form) {
    this.apiService.postRequest('/sample', form).subscribe(res => {
      console.log(res);
    });
  }

}
