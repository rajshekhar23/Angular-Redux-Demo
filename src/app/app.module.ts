import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentOverviewComponent } from './student/student-overview/student-overview.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { StudentModule } from 'app/student/student.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeModule } from 'app/employee/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    StudentModule,
    EmployeeModule,
    NgReduxModule,
    HttpModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
