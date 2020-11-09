import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//MATERIAL IMPORTS


//__________________
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
