import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductComunicationService} from '../../product-comunication.service';
import {ProductHttpService} from '../../product-http.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductHttpService,
              private pc: ProductComunicationService,
              private router: Router,
              public activeModal: NgbActiveModal) { }

  form!: FormGroup;


  ngOnInit(): void {

    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      price: new FormControl("20"),
      promo: new FormControl(),
      active: new FormControl("true")
    })
  }

  submitForm() {
    this.productService.add(this.form.value).subscribe(

      v => {
        this.activeModal.close();
        this.router.navigate(['/products'])
      });
  }

}
