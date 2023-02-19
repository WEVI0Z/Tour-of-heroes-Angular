import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../hero';
import { add, get } from '../hero.actions';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';
import * as fromStore from '../hero.reducer'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes!: Observable<Hero[]>;
  selectedHero?: Hero;
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.store.select("heroes")
    this.store.dispatch(get())
  }

  add(name: string): void {
    name = name.trim();
    
    if (!name) { return; }

    this.store.dispatch(add({ name } as Hero));
  }

  constructor(
    private heroService: HeroService,
    private store: Store<{heroes: Hero[]}>
  ) {}
}
