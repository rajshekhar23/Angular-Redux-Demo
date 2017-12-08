import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { REMOVE_ALL_STUDENTS, REMOVE_STUDENT, TOGGLE_STUDENT_STATUS } from '../../actions';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})

export class ListStudentComponent implements OnInit {
  @select() students;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  remove_all_students() {
    this.ngRedux.dispatch({ type: REMOVE_ALL_STUDENTS });
  }

  remove_student(id) {
    this.ngRedux.dispatch({ type: REMOVE_STUDENT, id: id });
  }

  toggleStatus(id) {
    this.ngRedux.dispatch({ type: TOGGLE_STUDENT_STATUS, id: id });
  }

}
