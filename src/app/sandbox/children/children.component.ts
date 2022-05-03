import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TestService} from '../test.service';

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

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.info += '1'
    console.log(this.testService.info)
  }

  sayHello() {
    this.out.emit(50);
  }
}
