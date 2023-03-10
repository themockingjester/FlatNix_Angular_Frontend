import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  register() {
    axios.put(`https://fletnix.teckturt.co.in/site/apis/user/registerUser`, {}, {
      headers: {
        "email": (<HTMLInputElement>document.getElementById("emailToRegister")).value,
        "password": (<HTMLInputElement>document.getElementById("passwordToRegister")).value,
        "age": (<HTMLInputElement>document.getElementById("ageToRegister")).value
      }
    }).then((response) => {
      if (response.data.success == true && response.data.statusCode == 200) {
        window.location.href = "/login"
      } else {
        alert(response.data.message)
      }
    }).catch((error) => {
      console.log(error)
      alert(`Something went wrong while connecting to the server`)
    })
  }
}
