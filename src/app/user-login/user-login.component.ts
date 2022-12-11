import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private api: ApiService, private route: Router) { }
  email = ""
  password = ""

  readValues = () => {
    let data: any = {
      "email": this.email,
      "password": this.password
    }

    this.api.loginUser(data).subscribe(
      (response: any) => {
        this.email = ""
        this.password = ""
        if (response.status == "success") {
          let userId = response.userId
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          this.route.navigate(["/viewUserProduct"])
        } else {
          alert(response.message)
        }
      }
    )
  }
}
