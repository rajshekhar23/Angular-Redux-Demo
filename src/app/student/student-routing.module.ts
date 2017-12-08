import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListStudentComponent } from 'app/student/list-student/list-student.component';
import { NewStudentComponent } from 'app/student/new-student/new-student.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: ListStudentComponent
        },
        {
            path: 'liststudent',
            component: ListStudentComponent
        },
        {
            path: 'newstudent',
            component: NewStudentComponent
        }
    ])],
    exports: [RouterModule],
    declarations: [],
    providers: []
})

export class StudentRoutingModule { }
