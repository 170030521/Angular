import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  

    baseUrl:any='assets/json/web.json'
    
      constructor(private http:HttpClient) { }
    
      getCoursesInfo():Observable<any>{
    
        return this.http.get(this.baseUrl)
}

}
