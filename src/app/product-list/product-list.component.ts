import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  lock() {
    window.alert('Missile coordinates confirmed.');
  }

  onNotify() {
    window.alert('Missile Upgraded to ICBM');
  }

}


