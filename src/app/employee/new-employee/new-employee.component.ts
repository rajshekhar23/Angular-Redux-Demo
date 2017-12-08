import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/model/employee';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'app/store';
import { ADD_EMPLOYEE } from 'app/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  @select() employees;

  model: Employee = {
    id: 0,
    name: '',
    age: 0,
    isActive: false
  };

  constructor(private ngRedux: NgRedux<IAppState>, private _route: Router) { }

  ngOnInit() {
  }

  booleanToString(value) {
    return value ? 'Active' : 'Inactive';
  }

  onSubmit() {
    this.ngRedux.dispatch({ type: ADD_EMPLOYEE, employee: this.model });
    this._route.navigate(['listemployee']);
  }

}
