import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private route:Router){}
  username=""
  password=""

  readValues = ()=>{
    let data:any = {
      "username": this.username,
      "password": this.password
    }
    if(this.username=='admin'&&this.password=='12345'){
      console.log(data)
      this.route.navigate(['/viewAdminProduct'])
    }else{
      alert("Invalid login credentials!!!")
    }
  }
}
