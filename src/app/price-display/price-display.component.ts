import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})

/**
 * @PriceDisplay: A component to show the price of a
 * Product
 */
export class PriceDisplayComponent implements OnInit {

  @Input() price: number;
  constructor() { }

  ngOnInit() {
  }

}
