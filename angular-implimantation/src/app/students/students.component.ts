import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServicDataService} from "../servic-data.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students : any
  constructor(private route : Router, private service : ServicDataService) {
    this.students = service.getStudent();
  }

  ngOnInit() {
  }
  viewDetail(std){
    this.route.navigate(['/students' , std]);
  }
  editPage(std){
    this.route.navigate(['/student' , std]);
  }
}