import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


import { Employee } from './employee';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'my-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;
  constructor(private empService: EmployeeService,private router: Router){}
  
  ngOnInit(){
    this.getEmployees();
  }

  onSelect(employee: Employee): void{
    this.selectedEmployee = employee;
  }
  getEmployees(){
    this.empService.getEmployees().then(employees => this.employees = employees);
  }

  

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedEmployee]);
  }
  /*Add employee */
  add(name: string): void{
    name = name.trim();
    if(!name){
      return;
    }
    this.empService.create(name)
        .then(employee => {this.employees.push(employee);
                            this.selectedEmployee = null;
        })
  }
  /*Remove Employee */
  delete(employee: Employee): void{
    this.empService.delete(employee.id)
        .then(() => {
          this.employees = this.employees.filter(e => e !== employee);
          if(this.selectedEmployee === employee ){ this.selectedEmployee = null;}
        });
  }
  
}