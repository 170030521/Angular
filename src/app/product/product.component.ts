import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  filter:any='all'
  funnel:any='a-z'
 
 
 
  

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
  products:any = []

  constructor(private productsservice:ProductService)

  {

   productsservice.getProductsInfo().subscribe(

     data => this.products=data,

     error =>console.log(error)




   )

  }

  }
