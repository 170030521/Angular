import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../services/data1.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  customers:any=[]
  customers1:any=[
    {"empId":201,"empName":"geetha","salary":30000},
    {"empId":202,"empName":"vasantha","salary":25000},
    {"empId":203,"empName":"phani","salary":45000}
  ]

  constructor(private dataService:Data1Service) {
    dataService.currentMsg.subscribe((successMsg: any) => this.customers = successMsg)
  }
  ngOnInit(): void {  }
  modifiedData(){
     for(var i=0;i<this.customers1.length;i++){
    this.dataService.changeData(this.customers1[i])
     }
  }

}