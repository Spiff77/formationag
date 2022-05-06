import {createAction, props} from '@ngrx/store';

export const increment = createAction('[COUNTER] increment')
export const decrement = createAction('[COUNTER] decrement')
export const reset = createAction('[COUNTER] reset')
export const customValue = createAction('[COUNTER] custom value', props<{value: number}>())
