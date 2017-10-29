import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { EmployeeService } from './employee.service';

import { Employee } from './employee';


@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{
    @Input() employee: Employee;


    constructor(
        private empService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(){
        this.route.paramMap.switchMap((params: ParamMap) => this.empService.getEmployee(+params.get('id')))
        .subscribe(employee => this.employee = employee)
    }
    goBack(): void{
        this.location.back();
    }
    Save(): void{
        this.empService.update(this.employee).then(() => this.goBack());
    }
}