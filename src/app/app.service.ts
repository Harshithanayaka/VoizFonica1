import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
{ providedIn: 'root'
})
export class ApiService{
api_link: string = 'http://localhost:8000/';
constructor(private http: HttpClient){ }
//READ
getItems1() {
   return this.http.get(this.api_link + 'api/list1/');
  };

getItems2() {
   return this.http.get(this.api_link + 'api/list2/');
  };
//  postItem(){
//  let value:string
//  return this.http.post(this.api_link + 'api/list2/' , value)
//  };
  //UPDATE
  //DELETE
  //CREATE
}
