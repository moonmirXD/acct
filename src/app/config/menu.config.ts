import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class MenuConfig {
    public defaults: any = {
        accounting: [
            { title: 'Chart of Accounts', path: '/pages/accounting/coa' },
            { title: 'Section 2', path: '/pages/preferences/bank' },
            { title: 'Section 3', path: 'Third section' },
        ],
        preferences: [
            { title: 'Sales Representative', path: '/pages/preferences/sales' },
            { title: 'Supplier', path: '/pages/preferences/supplier' },
            { title: 'Customer', path: '/pages/preferences/customer' },
            { title: 'Term', path: '/pages/preferences/term' },
            { title: 'Bank', path: '/pages/preferences/bank' },
            { title: 'Projects', path: '/pages/preferences/projects' },
            { title: 'Payee', path: '/pages/preferences/payee' }
        ]
    };

    public get configs(): any {
        return this.defaults;
    }
}
