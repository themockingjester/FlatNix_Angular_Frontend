import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignUpPageComponent } from './Pages/sign-up-page/sign-up-page.component';

const appRoutes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignUpPageComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
