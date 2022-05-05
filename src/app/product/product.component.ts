import {Component, HostListener, Input, OnInit, EventEmitter, Output, TemplateRef} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../product.service';
import {ProductHttpService} from '../product-http.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

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

  modalRef!: NgbModalRef;

  constructor(private productService: ProductHttpService, private modalService: NgbModal) { }

  @HostListener('click')
  clickProduct(){
    this.outProductInfo.emit(this.product)
  }

  ngOnInit(): void {
  }

  delete() {
    this.productService.delete(this.product.id).subscribe(v => {
      this.modalRef.close();
      this.outDelete.emit();
    });
  }

  open(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, {
      backdropClass: 'bgBlue',


    });
  }
}
