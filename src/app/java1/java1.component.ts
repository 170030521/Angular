import { Component, OnInit } from '@angular/core';
import { JavaService } from '../services/java.service';

@Component({
  selector: 'app-java1',
  templateUrl: './java1.component.html',
  styleUrls: ['./java1.component.css']
})
export class Java1Component implements OnInit {

 

  
 

    filter:any='all'
    funnel:any='a-z'
  courses: any;
   
   
   
    
  
    ngOnInit(): void {
    }
    // productdetails =[ 
    //   {
    //   productid:1,
    //   productname:'DairyMilk',
    //   productprice:300,
    //   productdesc:'product contains 10packets of dairymilk chocolates',
    // productimg:'assets/choco.jpg'
    //   },
  
    
    //     {
    //     productid:2,
    //     productname:'5star',
    //     productprice:100,
    //     productdesc:'product contains 10packets of 5star chocolates',
    //   productimg:'assets/choco1.jpg'
    //     }]   
   
  
    constructor(private courseservice:JavaService)
  
    {
  
    courseservice.getCoursesInfo().subscribe(
  
       data => this.courses=data,
  
       error =>console.log(error)
  
  
  
  
     )
  
    }
  
  }
  

