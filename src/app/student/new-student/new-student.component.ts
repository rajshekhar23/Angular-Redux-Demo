import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ADD_STUDENT } from '../../actions';
import { Student } from '../../model/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})

export class NewStudentComponent implements OnInit {
  @select() students;

  model: Student = {
    id: 0,
    name: '',
    age: 0,
    isActive: false
  };

  constructor(private ngRedux: NgRedux<IAppState>, private _route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({ type: ADD_STUDENT, student: this.model });
    this._route.navigate(['liststudent']);
  }

}
