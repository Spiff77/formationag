import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  desc1 = "Hello ca va?"
  desc2 = "Ouiiii"

  constructor() { }

  ngOnInit(): void {
  }

}
