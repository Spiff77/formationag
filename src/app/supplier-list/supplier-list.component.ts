import { Component, OnInit } from '@angular/core';
import {Supplier} from '../model/supplier.model';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  s1 =  new Supplier(11, 'aaa', '123456789101', 20000)
  s2 =  new Supplier(11, 'aaa', '12345678910112', 20000)

  constructor() { }

  ngOnInit(): void {
  }

}
