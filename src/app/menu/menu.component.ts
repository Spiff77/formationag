import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductAddComponent} from '../product/product-add/product-add.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private modalService: NgbModal) {}

  openAddProduct() {
    this.modalService.open(ProductAddComponent);
  }

}
