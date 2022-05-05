import { Component } from '@angular/core';
import {Product} from './model/product.model';
import {Client} from './model/client.model';
import {Supplier} from './model/supplier.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TestComponent} from './sandbox/test/test.component';

class Person{
  constructor(public id: number, public firstName: string) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularformation';

  color!: string;
  client = new Client("Michel","")
  supplier = new Supplier(20, "Amazon", "zefzefzef", 50000)

  constructor(private modalService: NgbModal) {}


  toggleActive() {
    this.client.active = !this.client.active
    console.log(this.client)

  }

  displayText(event: any) {
    console.log(event.target.value)
  }

  changeColor(event: any) {
    this.color = event.target.value
  }

  getSupplierClass(): string{
    if(this.supplier.ca < 2000) {
      return 'low';
    }else if(this.supplier.ca >= 2000 && this.supplier.ca < 5000){
      return 'medium';
    }else{
      return 'high';
    }
  }

  openModal() {
    const modalRef = this.modalService.open(TestComponent);
    modalRef.result.then(
      v => console.log('reason:', v),
      v => console.log('dismiss:', v))
    modalRef.componentInstance.name = 'World';
  }
}
