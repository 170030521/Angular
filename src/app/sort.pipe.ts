import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

 

  

  transform(value:any,args:any):any{
    if(args=='low') {
    
          var assendValue=value.sort((obj1:any,obj2:any) => (obj1.productprice < obj2.productprice)? -1 : 1)
          return assendValue
         }
         else if(args=='high') {
           var DesendValue=value.sort((obj1:any,obj2:any) => (obj1.productprice > obj2.productprice)? -1 : 1)
          return DesendValue
        }
        else if(args=='a-z') {
          var DesendValue=value.sort((obj1:any,obj2:any) => (obj1.productname < obj2.productname)? -1 : 1)
          return DesendValue
         }
         else if(args=='z-a') {
          var DesendValue=value.sort((obj1:any,obj2:any) => (obj1.productname > obj2.productname)? -1 : 1)
         return DesendValue
       }
    }
  }