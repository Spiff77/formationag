import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product|undefined
  filterStr = '';


  products = [new Product(1, 'Cd', 'De la bonne musique', 'MUSIQUE', 10, true),
              new Product(1, 'dvd', 'De la super musique', 'MUSIQUE', 12, true)]

  constructor() { }

  ngOnInit(): void {
  }

  receiveClickedProduct(product: Product) {
    this.selectedProduct = product
  }

  getFilteredList(){
    return this.products.filter(p => p.name.toLowerCase().includes(this.filterStr.toLowerCase()))
  }
}
