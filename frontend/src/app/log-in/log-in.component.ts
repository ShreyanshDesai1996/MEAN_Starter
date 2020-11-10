import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { SnackService } from '../snack.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email:string
  password:string

  constructor(public userService: UserService, public snackService: SnackService, public router: Router) { }

  ngOnInit(): void {
  }

  async submitBtn(){
    const udata:any ={'email':this.email,'password':this.password}
    const result=<any> await this.userService.logIn(udata)
    console.log(result)
    if(result.result === 'ok' && result.token){
      this.snackService.showMessage('Logged In Successfully!')
      this.userService.setUserToken(result.token)
      this.router.navigateByUrl('/home')
    }
    else{
      this.snackService.showMessage(result.result)
    }
  }

}
