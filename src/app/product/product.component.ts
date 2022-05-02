import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @HostListener('click')
  clickProduct(){
    console.log("Hello")
  }

  ngOnInit(): void {
  }

}
