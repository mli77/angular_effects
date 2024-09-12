import { Action, createReducer, on } from '@ngrx/store';
import { addUrl, remove } from './app.actions';
import { HttpCodeState, initialState } from './app.state';

const _statusCodeReducer = createReducer(
  initialState,
  on(remove, (state, action) => state.filter(http => http.code !== action.code)),
  on(addUrl, (state, action) => [...state, { code: action.code, url: action.url }])
);

export function statusCodeReducer(state: HttpCodeState[] = initialState, action: Action) {
  return _statusCodeReducer(state, action);
}
