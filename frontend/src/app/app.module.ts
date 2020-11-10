import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// angular material imports
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';

//service imports
import { UserService } from './user.service'
import { SnackService } from './snack.service'
import { AuthGuardService } from './auth-guard.service'
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

//component imports
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    ForgotPasswordComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatChipsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSelectModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatDialogModule,
    MatSidenavModule,
    MatStepperModule
  ],
  providers: [UserService, SnackService, AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
