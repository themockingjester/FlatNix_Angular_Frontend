import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlatNix_Angular_Frontend';
  logout() {
    axios.post(`http://localhost:4002/apis/auth/logout`, {}, { withCredentials: true }).then((response) => {
      if (response.data.success == true && response.data.statusCode == 200) {
        alert(response.data.message)
        window.location.href = "/login"
      } else {
        alert(response.data.message)

      }
    }).catch((error) => {
      alert(`Something went wrong while connecting to server`)

      console.log(error.message, 5643, error)
    })
  }
}
