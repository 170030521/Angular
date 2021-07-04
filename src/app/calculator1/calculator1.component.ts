import { Component, OnInit } from '@angular/core';
import { Calculator1Service } from '../service/calculator1.service';

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.css']
})

  export class Calculator1Component implements OnInit {
    number1:any
    number2:any
    result:any
  
  
    constructor(private service:Calculator1Service) { }
  
    ngOnInit(): void {
    }
    Perform(operator:any,group:any)
    {
      var a =(Number)(this.number1)
      var b =(Number)(this.number2)
      this.result= this.service.evaluate(a,b,operator,group)
  
    }
  }


