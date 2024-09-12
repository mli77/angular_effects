import { createAction, props } from '@ngrx/store';
import { HttpCodeState } from './app.state';

export const add = createAction('[Http Status] Add', props<{ code : number}>());
export const remove = createAction('[Http Status] Remove', props<{ code : number}>());
export const addUrl = createAction('[Http Status] Add Url', props<HttpCodeState>());
