import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})

/**
 * @ProductRow: A Component For View of Single product
 */
export class ProductRowComponent implements OnInit {
  
  @Input() product:Product;
  @Output() selectedProduct:EventEmitter<Product>;

  constructor() { 
    this.selectedProduct = new EventEmitter();
  }

  ngOnInit() {
  }

  public addToCart()
  {
    this.selectedProduct.emit(this.product);
  }
}
