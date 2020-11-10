import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  cookieName:string = 'utoken'

  //routes for which requests should be allowed even without a jwt user token 
  unprotectedRoutes = [{path: '/auth/signup'}, {path: '/auth/login'}]

  constructor(public http: HttpClient,public router: Router, private cookieService: CookieService,) {}

  //this method is used by http interceptor to check wether the user is trying to access an unprotected backend route such as login, signup, forgot password
  isUnprotected(url:string): boolean {
    console.log('Checking if route is unprotected:', url)
    if (this.unprotectedRoutes.find(route => route.path === url.substring(environment.apiBaseUrl.length))){
      return true
    }
    else{
      return false
    }
  }

  //sends a signup request to the backend
  signUp(udata:JSON) {
    console.log('Sign up service method received: ',udata);
    return new Promise((resolve) => {
      return this.http.post(environment.apiBaseUrl + '/auth/signup', udata).subscribe((result)=>{
        resolve(result)
      })
    })
  }

  //sends a login request to the backend, on success a result and token is returned in the response
  logIn(udata:JSON){
    console.log('Sign in service method called with:', udata)
    return new Promise((resolve) => {
      return this.http.post(environment.apiBaseUrl + '/auth/login', udata).subscribe((result) => {
        resolve(result)
      })
    })
  }

  //sets the JWT token recieved after log in as a cookie
  setUserToken(token:string){
    this.cookieService.set(this.cookieName, token);
  }

  //checks if the user token exists
  public hasToken(): boolean{
    return this.cookieService.check(this.cookieName)
  }

  getToken(){
    return this.cookieService.get(this.cookieName)
  }

  //method called by home component to simulate a request which requires authorization
  testAuth(){
    console.log('Testing auth by creating a request to /user/testAuth');
    return new Promise((resolve) => {
      return this.http.post(environment.apiBaseUrl + '/user/testAuth',{}).subscribe((result) => {
        resolve(result)
      })
    })
  }
}
