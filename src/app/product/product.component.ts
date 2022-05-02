import {Component, HostListener, Input, OnInit,EventEmitter, Output} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output()
  out = new EventEmitter<Product>();

  @Input()
  product!: Product

  constructor() { }

  @HostListener('click')
  clickProduct(){
    this.out.emit(this.product)
  }

  ngOnInit(): void {
  }

}
