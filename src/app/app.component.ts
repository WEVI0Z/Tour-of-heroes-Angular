import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { get } from './hero.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';

  ngOnInit() {
    this.store.dispatch(get())
  }

  constructor(
    private store: Store
  ) {}
}