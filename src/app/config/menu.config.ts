import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class MenuConfig {
    public defaults: any = {
        accounting: [
            { title: 'Chart of Accounts', path: '/accounting/coa' },
            { title: 'Section 2', path: '/preferences/bank' },
            { title: 'Section 3', path: 'Third section' },
        ],
        preferences: [
            { title: 'Sales Representative', path: '/preferences/sales' },
            { title: 'Supplier', path: '/preferences/supplier' },
            { title: 'Section 3', path: 'Third section' },
        ]
    };

    public get configs(): any {
        return this.defaults;
    }
}
