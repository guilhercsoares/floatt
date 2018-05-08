import { Component, OnInit } from '@angular/core';
import { Product } from "../Product";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {
    id: 1,
    img: "https://scontent.fpoa4-1.fna.fbcdn.net/v/t31.0-8/23213118_2002287300055726_3046554426377737042_o.jpg?_nc_cat=0&oh=935e70370274f921052487caf7316e7e&oe=5B540B0B",
    name: "Óculos 1",
    description: "Óculos de Bambu Charcoal com lentes na cor Cinza, polarizadas e com proteção UV400.",
    price: 300.00
}

  constructor() { }

  ngOnInit() {
  }

}
