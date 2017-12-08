import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from 'app/student/student-routing.module';
import { FormsModule } from '@angular/forms';
import { ListStudentComponent } from './list-student/list-student.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { TotalCountComponent } from 'app/total-count/total-count.component';

@NgModule({
  imports: [
    SharedModule,
    StudentRoutingModule,
    FormsModule
  ],
  declarations: [ListStudentComponent, NewStudentComponent],
  exports: []
})

export class StudentModule { }
