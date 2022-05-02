import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product|undefined

  p1 = new Product(1, 'CD 1', 'De la bonne musique', 'MUSIQUE', 10, true)
  p2 = new Product(1, 'CD 2', 'De la super musique', 'MUSIQUE', 12, true)

  constructor() { }

  ngOnInit(): void {
  }

  receiveClickedProduct(product: Product) {
    this.selectedProduct = product
  }
}
