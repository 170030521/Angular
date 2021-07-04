import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geetha',
  templateUrl: './geetha.component.html',
  styleUrls: ['./geetha.component.css']
})
export class GeethaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
  }
  customer={
    name:'geetha',
    age:20,
    array:[10,20,13],
    numberAndString:[1,'phani'],
    allTypes:true
  }

}
