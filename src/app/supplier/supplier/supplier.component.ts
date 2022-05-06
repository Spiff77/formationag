import {Component, Input, OnInit} from '@angular/core';
import {Supplier} from '../../model/supplier.model';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  @Input()
  supplier!: Supplier

  constructor() { }

  ngOnInit(): void {
  }

}
