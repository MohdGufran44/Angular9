import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  students = [
    {id : 101 , name : 'Anas', address : {dist : 'Bareilly', state : 'UP', zip : 243001 }},
    {id : 102 , name : 'Azhar Ali', address : {dist : 'Rampur', state : 'Maharastra', zip : 221003 }},
    {id : 103 , name : 'Akash Kumar', address : {dist : 'Lucknow', state : 'UP', zip : 241063 }},
    {id : 104 , name : 'Nikhil', address : {dist : 'kadapa', state : 'AP', zip : 516001 }}
    ];
 
  constructor() { }

  ngOnInit() {
  }

}
