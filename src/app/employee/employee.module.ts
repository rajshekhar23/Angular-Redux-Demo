import { NgModule } from '@angular/core';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeRoutingModule } from 'app/employee/employee-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    EmployeeRoutingModule,
    FormsModule
  ],
  declarations: [ListEmployeeComponent, NewEmployeeComponent],
  exports: [ListEmployeeComponent, NewEmployeeComponent]
})
export class EmployeeModule { }
