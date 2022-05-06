import {createReducer, on} from '@ngrx/store';
import {CounterState, initialState} from './counter.state';
import {customValue, decrement, increment, reset} from './counter.actions';

const $counterReducer = createReducer(initialState,
    on(increment, (state) => {
      return {
        ...state,
        counter: state.counter + 1
      }
    }),
    on(decrement, (state) => {
      return {
        ...state,
        counter: state.counter - 1
      }
    }),on(reset, (state) => {
      return {
        ...state,
        counter: 0
      }
    })
    ,on(customValue, (state, action) => {
      return {
        ...state,
        counter: action.value
      }
    }),
  )

export function counterReducer(state: any, action: any): CounterState{
  return $counterReducer(state, action)
}
