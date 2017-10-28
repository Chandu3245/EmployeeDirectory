import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeDetailComponent } from './employee-detail.component';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template: `
          <h3>Welcome to {{title}}</h3>          
          <h2>Employee List</h2>
          <ul class="employees">
            <li *ngFor ="let employee of employees" (click)="onSelect(employee)" [class.selected]="employee === selectedEmployee">
              <span class="badge">{{employee.id}}</span> {{employee.name}}
            </li>
          </ul>
          <employee-detail [employee]="selectedEmployee"></employee-detail>
  `,
  //styleUrls: ['./app.component.css']
  styles: [`
  .selected{
    background-color: #CFD8DC !important;
    color: white;
  }
  .employees{
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .employees li{
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding:.3em 0;
    height:1.6em;
    border-radius: 4px;
  }
  .employees li.selected:hover{
    background-color: #BBD8DC !important;
    color: white;
  }
  .employees li:hover{
    color: #607D8B;
    background-color: #DDD;
    left: .1em; 
  }
  .employees .text{
    postion: relative;
    top: -3px;
  }
  .employees .badge{
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `]
})
export class AppComponent {
  title = 'Tour of Employees';
  public employees = EMPLOYEES;
  selectedEmployee: Employee;

  onSelect(employee: Employee): void{
    this.selectedEmployee = employee;
  }
  
}


const EMPLOYEES: Employee[] = [
  {id:11, name:"Google"},
  {id:12, name:"Amazon"},
  {id:13, name:"Apple"},
  {id:14, name:"Microsoft"},
  {id:15, name:"Nutanix"},
  {id:16, name:"Salesforce"},
  {id:17, name:"SAP"}
]

