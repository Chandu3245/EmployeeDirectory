import { Component, Input } from '@angular/core';
import { Employee } from './employee';


@Component({
    selector: 'employee-detail',
    template: `          
    <div *ngIf="employee">
        <h4> {{employee.name}} details! </h4>
        <div><label>Id: </label>{{employee.id}}</div>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="employee.name" placehilder="name">
        </div>
  </div>`
})
export class EmployeeDetailComponent{
    @Input() employee: Employee;
}