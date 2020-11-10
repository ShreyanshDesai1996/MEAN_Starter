import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service'
import { SnackService } from './snack.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor( public userService : UserService, public snackService : SnackService) { }

  canActivate():boolean{
    //if there is no token, route can not be activated
    if(!this.userService.hasToken()){
      this.snackService.showMessage('You are not logged in!')
      return false
    }
    return true
  }

}
