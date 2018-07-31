import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})

/**
 * @ProductDepartment: A component to show the breadcrumbs to a
 * Product's department
 */
export class ProductDepartmentComponent implements OnInit {

  @Input() public product: Product;

  constructor() { }

  ngOnInit() {
  }

}
