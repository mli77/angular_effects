import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, remove } from './store/app.actions';
import { selectCodes } from './store/app.selector';
import { AppState, HttpCodeState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  code$: Observable<HttpCodeState[]>;
  statusCode: number;
  
  constructor(private httpStatusStore: Store<AppState>) {
    this.code$ = httpStatusStore.select(selectCodes);
  }

  onAdd() {
    this.httpStatusStore.dispatch(add({ code: this.statusCode }));
  }

  onRemove() {
    this.httpStatusStore.dispatch(remove({ code: this.statusCode }));
  }

}
