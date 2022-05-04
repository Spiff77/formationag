import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductHttpService} from '../product-http.service';
import {ProductComunicationService} from '../product-comunication.service';
import {Supplier} from '../model/supplier.model';
import {Router} from '@angular/router';
import {interval, of, Subscription, takeUntil, takeWhile} from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit, OnDestroy {

  open = true;

  constructor(private productService: ProductHttpService,
              private pc: ProductComunicationService,
              private router: Router) { }

  form!: FormGroup;


  ngOnInit(): void {

    interval(1000).pipe(takeWhile(v => this.open)).subscribe(v => console.log(v));
    interval(1000).pipe(takeWhile(v => this.open)).subscribe(v => console.log(v));
    interval(1000).pipe(takeWhile(v => this.open)).subscribe(v => console.log(v));
    interval(1000).pipe(takeWhile(v => this.open)).subscribe(v => console.log(v));


    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      price: new FormControl("20"),
      promo: new FormControl(),
      active: new FormControl("true")
    })

    const s = new Supplier();
  }

  submitForm() {
    this.productService.add(this.form.value).subscribe(
      v => this.router.navigate(['/products'])
    );
  }

  ngOnDestroy(): void {
    this.open = false;
  }
}
