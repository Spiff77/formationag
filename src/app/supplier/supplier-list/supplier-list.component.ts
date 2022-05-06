import { Component, OnInit } from '@angular/core';
import {Supplier} from '../../model/supplier.model';
import {SupplierService} from '../../supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  suppliers: Supplier[] = []
  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void {
    this.suppliers = this.supplierService.findAll();
  }

}
