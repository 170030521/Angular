import { Component, OnInit } from '@angular/core';
import { JavaService } from '../services/java.service';

@Component({
  selector: 'app-multithreading',
  templateUrl: './multithreading.component.html',
  styleUrls: ['./multithreading.component.css']
})
export class MultithreadingComponent implements OnInit {

  courses:any = {}
  constructor(private javaservice:JavaService)
  {
 
}  ngOnInit(): void {
  this.javaservice.getCoursesInfo().subscribe(
    data => data.forEach((val:any) => (val.courseid=='multithreading') ? this.courses = val : console.log(-1))
  )
  }
}


