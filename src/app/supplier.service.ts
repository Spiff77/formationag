import { Injectable } from '@angular/core';
import {Supplier} from './model/supplier.model';
import {Product} from './model/product.model';

@Injectable()
export class SupplierService {

  suppliers: Supplier[] = [new Supplier(11, 'aaa', '123456789101', 20000),
                          new Supplier(11, 'aaa', '12345678910112', 20000)]
  constructor() { }

  findAll(): Supplier[] {
    return this.suppliers;
  }

  findOne(id: number): Supplier | undefined {
    return this.suppliers.find( s => s.id === id);
  }

  delete(id: number): void {
    let searchElement = this.suppliers.find(s => s.id == id);
    if(searchElement){
      let start = this.suppliers.indexOf(searchElement);
      this.suppliers.splice(start, 1)
    }
  }

  add(s :Supplier){
    this.suppliers.push(s);
  }
}
