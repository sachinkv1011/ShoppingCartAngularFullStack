import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-admin-product',
  templateUrl: './view-admin-product.component.html',
  styleUrls: ['./view-admin-product.component.css']
})
export class ViewAdminProductComponent {
  title = ""
  constructor(private api: ApiService) {
    api.getProduct().subscribe(
      (response) => {
        this.loading = false
        this.products = response
        console.log(response)
      }
    )
  }

  readValues = () => {
    let data: any = {
      "title": this.title
    }
    if (this.title.length == 0) {
      this.searchData = []
    } else {
      this.api.searchProduct(data).subscribe(
        (response: any) => {
          if (response.length == 0) {
            this.searchData = []
          } else {
            this.searchData = response
          }
        }
      )
    }
  }
  searchData: any = []
  products: any = []
  loading: boolean = true
}
