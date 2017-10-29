import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit{
    employees: Employee[] = [];

    constructor(private empService: EmployeeService){

    }
    ngOnInit(){
        this.empService.getEmployees().then(employees => this.employees = employees)
    }
}