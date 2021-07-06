import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-web1',
  templateUrl: './web1.component.html',
  styleUrls: ['./web1.component.css']
})
export class Web1Component implements OnInit {

  

  ngOnInit(): void {
  }

 

  
 

    filter:any='all'
    funnel:any='a-z'
  courses: any;
   
   
   
    
  
    
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
   
  
    constructor(private courseservice: WebService)
  
    {
  
    courseservice.getCoursesInfo().subscribe(
  
       data => this.courses=data,
  
       error =>console.log(error)
  
  
  
  
     )
  
    }
  
    }
  



