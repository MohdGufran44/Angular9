import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ServicDataService} from "../servic-data.service";

@Component({
  selector: 'app-students-marks',
  templateUrl: './students-marks.component.html',
  styleUrls: ['./students-marks.component.css']
})
export class StudentsMarksComponent implements OnInit {

  Marks : any;
  sid : number;
  english : number;
  math : number;
  physic : number
  constructor(private activeRoute : ActivatedRoute , private marksService : ServicDataService) {
    this.Marks = marksService.getMarks();
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params : ParamMap)=>{
      this.sid = parseInt(params.get('id'));
      console.log(this.sid);
      for(let mark of this.Marks){
        if(mark.id == this.sid){
          this.english = mark.english;
          this.math = mark.math;
          this.physic = mark.physics;
        }
      }
    });
  }

}