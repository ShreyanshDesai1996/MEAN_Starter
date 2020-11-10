import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient,public router: Router, private cookieService: CookieService,) { 
    
  }

  signUp(udata:JSON) {
    console.log('Sign up service method received: ',udata);
    return new Promise((resolve) => {
      return this.http.post(environment.apiBaseUrl + '/auth/signup', udata).subscribe((result)=>{
        resolve(result)
      })
    })
  }
}
