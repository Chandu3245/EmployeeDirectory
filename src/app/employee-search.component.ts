import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//Observable class extensions
import 'rxjs/add/observable/of';

//Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { EmployeeSearchService } from './employee-search.service';
import { Employee } from './employee';

@Component({
    selector: 'employee-search',
    templateUrl: './employee-search.component.html',
    styleUrls: ['./employee-search.component.css'],
    providers: [EmployeeSearchService]
})
export class EmployeeSearchComponent implements OnInit {
    employees: Observable<Employee[]>;
    private searchTerms = new Subject<string>();// Subject is producer of an observable event stream

    constructor(private empSearchService: EmployeeSearchService, private router: Router){}

    //push a search term into observable stream
    search(term: string):void{
        this.searchTerms.next(term);
    }

    ngOnInit(): void{
        this.employees = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => undefined !== term 
        ? this.empSearchService.search(term)
        :Observable.of<Employee[]>([]))
        .catch( error => {
            console.error(error);
            return Observable.of<Employee[]>([]);
        });

    }
    gotoDetail(employee: Employee): void{
        let link = ['/detail',employee.id];
        this.router.navigate(link);
    }

}