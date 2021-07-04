import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
//  puname:string = "chiranjeevi";
//  parentData:string = ''

//  parentMethod(value:string){
//   //console.log(`Inside Parent ${value}`)
//   this.parentData = value
Counter=1000;
  parentData(count: number) {
    this.Counter = count;
    console.log(count);
  }

 }
