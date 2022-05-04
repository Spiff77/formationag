import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../product.service';
import {ProductHttpService} from '../product-http.service';
import {Observable} from 'rxjs';
import {ProductComunicationService} from '../product-comunication.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product|undefined
  filterStr = '';
  products!: Observable<Product[]>

  constructor(private productService: ProductHttpService, private pc: ProductComunicationService) { }

  ngOnInit(): void {
    this.updateList();
    this.pc.productUpdate.subscribe( v=> {
      this.updateList();
    } )
  }

  private updateList() {
    this.products = this.productService.findAll();
  }

  receiveClickedProduct(product: Product) {
    this.selectedProduct = product
  }

  getFilteredList(){
   // return this.products.filter(p => p.name.toLowerCase().includes(this.filterStr.toLowerCase()))
  }

  refreshData() {
    this.ngOnInit()
  }
}
