import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';

@Injectable()
export class EmployeeService{


    private employeesUrl = 'api/employees'; //URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor( private http: Http){}

   /* //Synchronous data flow from mock file
    getEmployees():Employee[]{
        return EMPLOYEES;
    }

    //async data flow mock from mock file
    /*getEmployees(): Promise<Employee[]>{
        return Promise.resolve(EMPLOYEES);
    }

    //async data flow mock with delay from mock file
    getEmployeesSlowely(): Promise<Employee[]>{

        return new Promise(resolve => {
            setTimeout(() => resolve(this.getEmployees()), 2000);
        });
    }*/

    getEmployee(id: number): Promise<Employee>{
        const url = `${this.employeesUrl}/${id}`;
        //return this.getEmployees().then(EMPLOYEES => EMPLOYEES.find(employee => employee.id === id));
        return this.http.get(url).toPromise()
        .then(response => response.json().data as Employee)
        .catch(this.handleError);
    }
    getEmployees(): Promise<Employee[]>{

        return this.http.get(this.employeesUrl)
                    .toPromise()
                    .then(response => response.json().data as Employee[])
                    .catch(this.handleError);
    }
    

    update(employee: Employee): Promise<Employee>{
        const url = `${this.employeesUrl}/${employee.id}`;
        return this.http.put(url,JSON.stringify(employee), {headers: this.headers})
        .toPromise()
        .then(() => employee)
        .catch(this.handleError);
    }
    create(name: string): Promise<Employee>{
        return this.http.post(this.employeesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Employee)
        .catch(this.handleError);
    }
    delete(id: number): Promise<void>{
        const url =  `${this.employeesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any>{
            console.error('An error occured', error);//for demo pirpose only
            return Promise.reject(error.message || error);
    }
}



