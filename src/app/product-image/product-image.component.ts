import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-image',
  template: `
  <img [src]="product.imageUrl" class="rounded img-fluid" [alt]="product.imageUrl">
  `,
  styleUrls: ['./product-image.component.css']
})

/**
 * @ProductImage: A component to show a single Product's image
 */
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  constructor() { }
  
  ngOnInit() {
  }

}
