import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentComponent } from './department/department.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path : '', redirectTo: '/department', pathMatch : 'full'
  },
  {
    path : 'department', component : DepartmentComponent,
  },
  {
    path : 'department/:id', component : DepartmentDetailComponent,
  },

  {
    path : 'employees', component : EmployeesComponent,
  },

  {
    path : "**", component : PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepartmentComponent, EmployeesComponent, DepartmentDetailComponent,PageNotFoundComponent]
