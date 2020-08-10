import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class MenuConfig {
    public defaults: any = {
        accounting: [
            { title: 'Chart of Accounts', path: '/accounting/coa' },
            { title: 'Payable Entry', path: '/accounting/payable' },
            { title: 'Section 3', path: 'Third section' },
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
