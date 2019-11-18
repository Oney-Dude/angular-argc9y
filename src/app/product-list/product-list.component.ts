import { Component } from '@angular/core';

import { locations } from '../locations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = locations;

  lock() {
    window.alert('Missile coordinates confirmed.');
  }

  onNotify() {
    window.alert('Missile Upgraded to ICBM');
  }

}


