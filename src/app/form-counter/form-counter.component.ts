import { Component, OnInit } from '@angular/core';
import {CounterState} from '../state/counter.state';
import {Store} from '@ngrx/store';
import {customValue} from '../state/counter.actions';

@Component({
  selector: 'app-form-counter',
  templateUrl: './form-counter.component.html',
  styleUrls: ['./form-counter.component.scss']
})
export class FormCounterComponent implements OnInit {
  text = '';

  constructor(private store: Store<CounterState>) { }

  ngOnInit(): void {
  }

  setCounterValue() {
    this.store.dispatch(customValue({value: + this.text}));
  }
}
