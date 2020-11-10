import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result:any

  constructor(public userService : UserService) { }

  async ngOnInit() {
    this.result="Waiting for backend..."
    this.result = <any> await this.userService.testAuth()
    console.log('Response for testAuth:',this.result)
  }

}
