import { Component, OnInit } from '@angular/core';
import { Cart } from "../Cart";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = {
    products: []
  };

  constructor() { }

  ngOnInit() {

  }

}
