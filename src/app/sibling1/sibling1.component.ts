import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../services/data1.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  customers:any=[]
  customers1:any=[
    {"empId":101,"empName":"geetha","salary":30000},
    {"empId":102,"empName":"Ram","salary":25000},
    {"empId":103,"empName":"Ramya","salary":45000}
  ]
 
   constructor(private dataService:Data1Service) {
 
   }
   ngOnInit(): void {
     this.dataService.currentMsg.subscribe((successMsg: any) => this.customers = successMsg)
    }
   modifiedData()
   {
       for(var i=0;i<this.customers1.length;i++){
       this.dataService.changeData(this.customers1[i])
        }
 
   }
 

}