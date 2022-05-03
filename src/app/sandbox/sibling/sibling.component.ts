import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss'],
})
export class SiblingComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.info += '2'
    console.log(this.testService.info)
  }

}
