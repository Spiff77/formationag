import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CounterState} from '../state/counter.state';
import {decrement, increment, reset} from '../state/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  value!: Observable<{counter: number}>;

  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.value = this.store.select('counter')
  }

  increase() {
    this.store.dispatch(increment())
  }
  decrease() {
    this.store.dispatch(decrement())
  }
  reset() {
    this.store.dispatch(reset())
  }
}
