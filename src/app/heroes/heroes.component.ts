import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../hero';
import { add } from '../hero.actions';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes!: Observable<Hero[]>;
  
  ngOnInit(): void {
    this.heroes = this.store.select("heroes");
  }

  add(name: string): void {
    name = name.trim();
    
    if (!name) { return; }

    this.store.dispatch(add({ name } as Hero));
  }

  constructor(
    private store: Store<{heroes: Hero[]}>
  ) {}
}
