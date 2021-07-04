import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() cuname:string='';
  // @Output() notify:EventEmitter<string> = new EventEmitter<string>();
  // sendDataFromChildToParent(){
  //   this.notify.emit('Child Data sending from Child Component')
  // }
  @Input()count:number=0
@Output() notify:EventEmitter<number>=new EventEmitter<number>();
SenddatafromChildtoParent(value:any)
{
  (value=='MutualFunds') ? this.count++ : this.count--

  this.notify.emit(this.count)
}
}



