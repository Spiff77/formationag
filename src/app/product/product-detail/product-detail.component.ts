import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductHttpService} from '../../product-http.service';
import {Product} from '../../model/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private aRoute: ActivatedRoute, private ps: ProductHttpService) { }

  ngOnInit(): void {
    const id = this.aRoute.snapshot.paramMap.get('id');

    if(id) {
      this.ps.findOne(+id).subscribe(v => this.product = v);
    }
  }
}
