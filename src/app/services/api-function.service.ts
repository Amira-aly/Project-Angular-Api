import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiFunctionService<type> {

  constructor(@Inject('string') public con:string,public http:HttpClient) { }
  get():Observable<type>{
    return this.http.get<type>(this.con);
  }

  getById(id:any):Observable<type>{
    return this.http.get<type>(this.con +`/${id}`)
  }


  post(Object:any):Observable<type> {
    return this.http.post<type>(this.con, Object)
  }


  put(id:any, Object:any):Observable<type>{
    return this.http.put<type>(this.con + `/${id}`, Object)
  }

  delete(id: any):Observable<type> {
    return this.http.delete<type>(this.con + `/${id}`)
  }
}
