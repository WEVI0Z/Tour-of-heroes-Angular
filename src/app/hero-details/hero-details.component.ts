import { Component } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Store } from '@ngrx/store';
import { del, update } from '../hero.actions';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent {
  ngOnInit():void {
    this.getHero();
  }

  hero!: Hero;

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.store.select("heroes").subscribe(data => {
      this.hero = structuredClone(data.filter(item => item.id === id)[0]);
    });
  }

  save() {
    if (this.hero) {
      console.log(this.hero)
      this.store.dispatch(update(this.hero));
    }
  }

  delete(hero: Hero): void {
    // this.heroService.deleteHero(hero.id).subscribe(() => this.goBack());
    this.store.dispatch(del(hero));
    this.goBack();
  }
  
  goBack(): void {
    this.location.back();
  }
  

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private store: Store<{heroes: Hero[]}>
  ) {}
}
