import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private api: ApiService, private route: Router) { }
  title = ""
  imageUrl = ""
  category = ""
  description = ""
  price = ""

  readValues = () => {
    let data: any = {
      "title": this.title,
      "imageUrl": this.imageUrl,
      'category': this.category,
      "description": this.description,
      "price": this.price,
    }
    this.api.addProduct(data).subscribe(
      (response: any) => {
        console.log(response)
        if (response.status == "success") {
          alert(response.message)
          this.title = ""
          this.imageUrl = ""
          this.category = ""
          this.description = ""
          this.price = ""
          this.route.navigate(["/viewAdminProduct"])
        } else {
          alert("Error on adding Friend")
        }
      }
    )
  }
}
