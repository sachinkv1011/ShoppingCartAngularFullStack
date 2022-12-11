import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  constructor(private api: ApiService, private route: Router) { }
  name = ""
  address = ""
  phone = ""
  email = ""
  password = ""
  confirmPassword = ""

  readValues = () => {
    let data: any = {
      "name": this.name,
      "address": this.address,
      "phone": this.phone,
      "email": this.email,
      "password": this.password,
      "confirmPassword": this.confirmPassword
    }
    if(this.password == this.confirmPassword){
      this.api.registerUser(data).subscribe(
        (response: any) => {
          this.name = ""
          this.address = ""
          this.phone = ""
          this.email = ""
          this.password = ""
          this.confirmPassword = ""
          if (response== "success") {
            alert(response.message)
            this.route.navigate(["/userLogin"])
          } else {
            alert(response.message)
          }
        }
      )
    }else{
      alert("password and confirm password mismatch")
    }
    
  }
}
