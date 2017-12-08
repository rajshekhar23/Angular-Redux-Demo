import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from 'app/employee/list-employee/list-employee.component';
import { NewEmployeeComponent } from 'app/employee/new-employee/new-employee.component';

const routes: Routes = [
    {
        path: 'listemployee',
        component: ListEmployeeComponent
    },
    {
        path: 'newemployee',
        component: NewEmployeeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeeRoutingModule { }
