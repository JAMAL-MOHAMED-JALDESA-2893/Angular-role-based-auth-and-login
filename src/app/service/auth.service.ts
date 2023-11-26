import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:3000/user';


  // fetching for all the data
  GetAll() {
    return this.http.get(this.apiurl);
  }

  // fetch by code or id function
  GetbyCode(code:any) {
    return this.http.get(this.apiurl + "/" + code);
  }

  // posting the registering details function
  Proceedregister(inputdata:any) {
    return this.http.post(this.apiurl, inputdata);
  }
   // updating the register details
  Updateuser(code: any, inputdata: any) {
    return this.http.put(this.apiurl + '/' + code, inputdata);
  }

}
