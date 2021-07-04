import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {

  result:any;
  

  doOperation(num1:any,num2:any,operator:any)
  {
    var a =(Number)(num1)
    var b =(Number)(num2)

     if(operator=='+')
     {
       this.result=a+b
     }
     else if(operator=='-')
     {
       this.result=a-b
     }
     else if(operator=='x')
     {
       this.result=a*b
     }
     else
     {
       this.result=a/b
     }
  }
}
