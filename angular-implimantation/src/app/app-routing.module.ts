import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from "./students/students.component";
import {StudentsMarksComponent} from "./students-marks/students-marks.component";
import {EditStudentComponent} from "./edit-student/edit-student.component";



const routes: Routes = [
  {
    path : 'students' , component : StudentsComponent
  },

  {
    path : 'students/:id' , component : StudentsMarksComponent,
  },
  {
    path : 'student/:id' , component : EditStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentsComponent,StudentsMarksComponent,EditStudentComponent,]