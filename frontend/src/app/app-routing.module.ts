import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard} from './auth-guard.service'

import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "register", component: SignUpComponent },
  { path: "login", component: LogInComponent },
  { path: "forgotPass", component: ForgotPasswordComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard]  },
  { path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
