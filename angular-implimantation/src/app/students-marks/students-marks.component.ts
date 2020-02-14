import { StudentsComponent } from './../students/students.component';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-students-marks',
  templateUrl: './students-marks.component.html',
  styleUrls: ['./students-marks.component.css']
})
export class StudentsMarksComponent implements OnInit {

  @Input() student: StudentsComponent;

  Marks =[
    {id : 101,math : 66, english : 77 , physics : 88 },
    {id : 102,math : 94, english : 58 , physics : 89 },
    {id : 103,math : 46, english : 98 , physics : 48 },
    {id : 104,math : 84, english : 39 , physics : 71 }
  ];
  constructor() { }

  ngOnInit() {
  }
  

}
console.log(StudentsComponent);
