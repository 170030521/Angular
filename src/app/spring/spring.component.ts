import { Component, OnInit } from '@angular/core';
import { JavaService } from '../services/java.service';

@Component({
  selector: 'app-spring',
  templateUrl: './spring.component.html',
  styleUrls: ['./spring.component.css']
})
export class SpringComponent implements OnInit {
  courses:any = {}
  constructor(private javaservice:JavaService)
  {
 
}  ngOnInit(): void {
  this.javaservice.getCoursesInfo().subscribe(
    data => data.forEach((val:any) => (val.courseid=='spring') ? this.courses = val : console.log(-1))
  )
  }
}


