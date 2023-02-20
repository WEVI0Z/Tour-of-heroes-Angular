import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = "api/heroes";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.messageService.add(error);

      return of(result as T);
    }
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.messageService.add("fetched heroes")),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  updateHero(hero: Hero): Observable<Hero> {
    this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.messageService.add(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );

    return new Observable(subsciber => subsciber.next(hero));
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.messageService.add(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.messageService.add(`deleted hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );

    return new Observable(subsciber => subsciber.next(hero));
  }

  constructor(
    private messageService: MessagesService,
    private http: HttpClient) { }
}
