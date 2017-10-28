import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//two way databinding ngModel

import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail.component';

@NgModule({
  declarations: [
    AppComponent, EmployeeDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
