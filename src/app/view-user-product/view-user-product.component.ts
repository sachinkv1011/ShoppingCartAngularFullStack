import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-user-product',
  templateUrl: './view-user-product.component.html',
  styleUrls: ['./view-user-product.component.css']
})
export class ViewUserProductComponent {
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
