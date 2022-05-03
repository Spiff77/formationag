import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product|undefined
  filterStr = '';
  products: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.findAll()
  }

  receiveClickedProduct(product: Product) {
    this.selectedProduct = product
  }

  getFilteredList(){
    return this.products.filter(p => p.name.toLowerCase().includes(this.filterStr.toLowerCase()))
  }
}
