import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignUpPageComponent } from './Pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SearchResultsPageComponent } from './Pages/search-results-page/search-results-page.component';
import { MediaInfoComponent } from './Pages/media-info/media-info.component';

const appRoutes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignUpPageComponent },
  { path: "home", component: HomePageComponent },
  { path: "searchResults", component: SearchResultsPageComponent },
  {path:"mediaInfo",component:MediaInfoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    SearchResultsPageComponent,
    MediaInfoComponent
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
