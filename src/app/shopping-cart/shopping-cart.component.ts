import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @Input() shoppingList:Product[];
  public total:number;
  
  constructor() 
  { 
    this.total = 0;
  }

  ngOnInit() {
  }

}
