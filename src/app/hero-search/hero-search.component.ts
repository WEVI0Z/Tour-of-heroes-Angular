import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Store } from '@ngrx/store';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.scss' ]
})

export class HeroSearchComponent implements OnInit {
  heroes: Hero[] = [];
  private searchTerms = new Subject<string>();

  constructor(
    private store: Store<{heroes: Hero[]}>
    ) {}

  search(term: string): void {
    term = term.trim().toLowerCase();

    if(term) {
      this.store.select("heroes").pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(heroes => {
        this.heroes = heroes.filter(hero => hero.name.toLowerCase().indexOf(term) !== -1);
      });
    } else {
      this.heroes = []
    }
  }

  ngOnInit(): void {
  }
}