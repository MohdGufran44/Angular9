import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments = [
    {"id":101, "name": "Java"},
    {"id":102, "name": "Angular"},
    {"id":103, "name": "Python"},
    {"id":104, "name": "HTML5 CSS3"},
    {"id":105, "name": "jQuery"}
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(dept){
    this.router.navigate(['/department', dept.id]);
  }

}
