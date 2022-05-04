import {Component, HostListener, Input, OnInit,EventEmitter, Output} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../product.service';
import {ProductHttpService} from '../product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output()
  outProductInfo = new EventEmitter<Product>();

  @Output()
  outDelete = new EventEmitter<void>();

  @Input()
  product!: Product

  constructor(private productService: ProductHttpService) { }

  @HostListener('click')
  clickProduct(){
    this.outProductInfo.emit(this.product)
  }

  ngOnInit(): void {
  }

  delete() {
    this.productService.delete(this.product.id).subscribe(v => this.outDelete.emit() )
  }
}
