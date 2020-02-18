import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicDataService {

  student = [
    {id : 101 , name : 'Anas', address : {dist : 'MBD', state : 'UP', zip : 244005 }},
    {id : 102 , name : 'Azhar', address : {dist : 'Mumbai', state : 'Maharastra', zip : 231003 }},
    {id : 103 , name : 'Raza', address : {dist : 'Bareily', state : 'UP', zip : 241563 }},
    {id : 104 , name : 'Aman', address : {dist : 'Gorakhpur', state : 'UP', zip : 218703 }},
    {id : 105 , name : 'Kapil Kumar', address : {dist : 'Rampur', state : 'MP', zip : 418603 }}
  ];

  Marks =[
    {math : 56, english : 77 , physics : 88, id : 101},
    {math : 84, english : 58 , physics : 89, id : 102},
    {math : 96, english : 98 , physics : 48, id : 103},
    {math : 74, english : 39 , physics : 71, id : 104},
    {math : 63, english : 62 , physics : 54, id : 105},

  ];

  getStudent(){
    return this.student;
  }

  getMarks(){
    return this.Marks;
  }
  constructor() { }
}