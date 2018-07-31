import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

/**
* @ProductsList: A component for rendering all ProductRows and
* storing the currently selected Product
*/

export class ProductsListComponent implements OnInit {

  /**
  *   @Input productList :  the products[] passed to use
  */
  @Input() productList:Product;
  
  /**
  *   @Output onProductSelected: send event(data) to parent component.
  */
  @Output() onProductSelected: EventEmitter<Product>;

  constructor() 
  {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  public clicked(product: Product)
  {
    this.onProductSelected.emit(product);
  }


}
