import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

    baseUrl:any='assets/json/product.json'
    
      constructor(private http:HttpClient) { }
    
      getProductsInfo():Observable<any>{
    
        return this.http.get(this.baseUrl)
}
}
