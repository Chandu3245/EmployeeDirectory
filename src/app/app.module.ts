import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//two way databinding ngModel
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from './employee.service';
import { DashboardComponent } from './dashboard.component';
import { EmployeeSearchComponent  } from './employee-search.component';


@NgModule({
  declarations: [
    AppComponent, EmployeesComponent, EmployeeDetailComponent,DashboardComponent,EmployeeSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpModule,     InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
