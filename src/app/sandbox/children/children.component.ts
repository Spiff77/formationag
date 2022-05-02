import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {

  @Output()
  out = new EventEmitter<number>()

  @Input('desc')
  description!: string;

  constructor() { }

  ngOnInit(): void {
  }

  sayHello() {
    this.out.emit(50);
  }
}
