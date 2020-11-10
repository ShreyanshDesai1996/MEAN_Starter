import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { SnackService } from '../snack.service'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name:string
  email:string
  password:string

  constructor(public userService: UserService, public snackService : SnackService) { }

  ngOnInit(): void {
  }

  async submitBtn() {
    const udata:any = { 'name': this.name, 'email': this.email, 'password': this.password }
    const result = <any> await this.userService.signUp(udata)
    console.log(result)
    if(result.result ==='ok'){
      this.snackService.showMessage('Success! Check your email to activate your account')
    }
    else {
      this.snackService.showMessage(result.result)
    }
  }

}
