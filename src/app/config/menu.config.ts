import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class MenuConfig {
    public defaults: any = {
        accounting: [
            { title: 'Chart of Accounts', path: '/accounting/coa' },
            { title: 'Payable Entry', path: '/accounting/payable' },
            { title: 'Receivable Entry', path: '/accounting/receivable' },
            { title: 'Check Entry', path: '/accounting/check' },
            { title: 'Receipt Entry', path: '/accounting/receipt' },
            { title: 'Adjustment Entry', path: '/accounting/adjustment' },
            { title: 'Credit Memo', path: '/accounting/credit-memo' },
            { title: 'Debit Memo', path: '/accounting/debit-memo' },
            { title: 'Voucher Entry', path: '/accounting/voucher' },
        ],
        preferences: [
            { title: 'Sales Representative', path: '/preferences/sales' },
            { title: 'Supplier', path: '/preferences/supplier' },
            { title: 'Customer', path: '/preferences/customer' },
            { title: 'Term', path: '/preferences/term' },
            { title: 'Bank', path: '/preferences/bank' },
            { title: 'Projects', path: '/preferences/projects' },
            { title: 'Payee', path: '/preferences/payee' }
        ]
    };

    public get configs(): any {
        return this.defaults;
    }
}
