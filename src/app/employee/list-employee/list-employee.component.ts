import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { REMOVE_EMPLOYEE, REMOVE_ALL_EMPLOYEES, TOGGLE_EMPLOYEE_STATUS } from 'app/actions';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  @select() employees;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  remove_employee(id) {
    this.ngRedux.dispatch({ type: REMOVE_EMPLOYEE, id: id });
  }

  remove_all_employees() {
    this.ngRedux.dispatch({ type: REMOVE_ALL_EMPLOYEES });
  }

  toggleStatus(id) {
    this.ngRedux.dispatch({ type: TOGGLE_EMPLOYEE_STATUS, id: id });
  }
}
