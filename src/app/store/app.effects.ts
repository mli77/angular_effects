import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { add, addUrl } from './app.actions';

@Injectable()
export class HttpUrlEffects {

  constructor(private actions$: Actions) {}

  readonly addUrl = createEffect(() => 
    this.actions$.pipe(
      ofType(add),
      mergeMap((action) => {
        return timer(10)
                .pipe(
                  map(() => addUrl({ code: action.code, url: 'https://http.cat/' + action.code }))
                );
      })
    ));
}
