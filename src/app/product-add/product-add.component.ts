import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductHttpService} from '../product-http.service';
import {ProductComunicationService} from '../product-comunication.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductHttpService, private pc: ProductComunicationService) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      price: new FormControl("20"),
      promo: new FormControl(),
      active: new FormControl("bbb")
    })
  }

  submitForm() {
    this.productService.add(this.form.value).subscribe(v=>
      this.pc.productUpdate.emit()
    );

  }
}
