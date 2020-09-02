import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class MenuConfig {
    public defaults: any = {
        accounting: [
            { title: 'Chart of Accounts', path: '/pages/accounting/coa' },
            { title: 'Payable Entry', path: '/pages/accounting/payable' },
            { title: 'Receivable Entry', path: '/accounting/receivable' },
            { title: 'Check Entry', path: '/pages/accounting/check' },
            { title: 'Receipt Entry', path: '/pages/accounting/receipt' },
            { title: 'Adjustment Entry', path: '/pages/accounting/adjustment' },
            { title: 'Credit Memo', path: '/pages/accounting/credit-memo' },
            { title: 'Debit Memo', path: '/pages/accounting/debit-memo' },
            { title: 'Voucher Entry', path: '/accounting/voucher' },
        ],
        preferences: [
            { title: 'Sales Representative', path: '/pages/preferences/sales' },
            { title: 'Supplier', path: '/pages/preferences/supplier' },
            { title: 'Customer', path: '/pages/preferences/customer' },
            { title: 'Term', path: '/pages/preferences/term' },
            { title: 'Bank', path: '/pages/preferences/bank' },
            { title: 'Projects', path: '/pages/preferences/projects' },
            { title: 'Payee', path: '/pages/preferences/payee' }
        ],
        settings: [
            { title: 'USER', path: '/pages/setting/user' },
            { title: 'MENU', path: '/pages/setting/menu' },
            { title: 'USER TYPE', path: '/pages/setting/user-type' },
            { title: 'ACCESS', path: '/pages/setting/access' },
            { title: 'CLASS', path: '/pages/setting/class' }
        ]
    };

    public get configs(): any {
        return this.defaults;
    }
}
