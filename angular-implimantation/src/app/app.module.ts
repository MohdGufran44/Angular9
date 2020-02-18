import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { StudentsComponent } from './students/students.component';
// import { StudentsMarksComponent } from './students-marks/students-marks.component';
// import { EditStudentComponent } from './edit-student/edit-student.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // StudentsComponent,
    // StudentsMarksComponent,
    // EditStudentComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


