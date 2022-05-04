import { Component, OnInit } from '@angular/core';
import {Supplier} from '../model/supplier.model';
import {SupplierHttpService} from '../supplier-http.service';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent implements OnInit {

  supplier = new Supplier()

  constructor(private supplierService: SupplierHttpService) { }

  ngOnInit(): void {
  }


  submitForm(form: NgForm) {
    if (form.valid){
      this.supplierService.add(this.supplier).subscribe();
    }
  }
}
