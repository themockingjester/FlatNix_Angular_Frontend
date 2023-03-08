import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  login() {
    axios.post(`https://fletnix.teckturt.co.in/site/apis/auth/login`, {}, {
      headers: {
        "email": (<HTMLInputElement>document.getElementById("emailToLogin")).value,
        "password": (<HTMLInputElement>document.getElementById("passwordToLogin")).value
      }, withCredentials: true
    }).then((response) => {
      if (response.data.success == true && response.data.statusCode == 302) {
        window.location.href = "/home"
      } else {
        alert(response.data.message)
      }
    }).catch((error) => {
      console.log(error)
      alert(`Something went wrong while connecting to the server`)
    })
  }
}
