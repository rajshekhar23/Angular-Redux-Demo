import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { REMOVE_ALL_STUDENTS } from 'app/actions';

@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.css']
})
export class StudentOverviewComponent implements OnInit {
  @select() students;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}
