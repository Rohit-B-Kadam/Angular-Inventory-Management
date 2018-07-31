import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public products: Product[];
  public shoppingList:Product[];
  public showCart:boolean;

  
  constructor() {

    this.showCart = false;

    this.products =
      [
        new Product(
          'MYSHOES',
          'Black Running Shoes',
          '/assets/images/products/black-shoes.jpg',
          ['Men', 'Shoes', 'Shoes'],
          109.99),
        new Product(
          'NEATOJACKET',
          'Blue Jacket',
          '/assets/images/products/blue-jacket.jpg',
          ['Women', 'Apparel', 'Jackets & Vests'],
          238.99),
        new Product(
          'NICEHAT',
          'A Nice Black Hat',
          '/assets/images/products/black-hat.jpg',
          ['Men', 'Accessories', 'Hats'],
          29.99)
      ];

      this.shoppingList = [];

  }

  public productWasSelected(product: Product) 
  {
    this.shoppingList.push(product);
  }

  public displayCart()
  {
    this.showCart = this.showCart ? false : true;
  }
}
