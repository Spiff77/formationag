import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  descs = ["Hello ca va?", "Oui et toi?", "Super"]

  constructor() { }

  ngOnInit(): void {
  }

  receiveHello(msg: number) {
    console.log(`PARENT RECOIS DE ENFANT: ${msg}`)
  }
}
