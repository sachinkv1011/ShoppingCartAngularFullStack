import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  loginUser = (data:any)=>{
    return this.http.post("http://localhost:8080/userLogin", data)
  }

  registerUser = (data:any) =>{
    return this.http.post("http://localhost:8080/userRegistration", data)
  }

  addProduct = (data:any) =>{
    return this.http.post("http://localhost:8080/addProducts", data)
  }

  getProduct = ()=>{
    return this.http.get("http://localhost:8080/fetchProducts")
  }

  searchProduct = (data:any)=>{
    return this.http.post("http://localhost:8080/searchProducts",data)
  }
}
