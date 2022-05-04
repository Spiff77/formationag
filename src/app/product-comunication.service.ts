import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductComunicationService {

  private $productUpdate = new EventEmitter<void>();

  constructor() { }

  get productUpdate(): EventEmitter<void> {
    return this.$productUpdate;
  }
}
