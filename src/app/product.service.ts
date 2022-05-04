import { Injectable } from '@angular/core';
import {Supplier} from './model/supplier.model';
import {Product} from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [new Product(1, 'Cd', 'De la bonne musique', 'MUSIQUE', 10, true),
    new Product(2, 'dvd', 'De la super musique', 'MUSIQUE', 12, true)]

  constructor() { }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find( s => s.id === id);
  }

  delete(id: number): void {
    let searchElement = this.products.find(s => s.id == id);
    if(searchElement){
      let start = this.products.indexOf(searchElement);
      this.products.splice(start, 1)
    }
  }

  add(s :Product){
    this.products.push(s);
  }
}
