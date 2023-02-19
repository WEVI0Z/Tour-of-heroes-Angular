import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap, switchMap } from "rxjs/operators";
import { add, addSuccess, get, getSuccess, update, updateSuccess } from "./hero.actions";
import { HeroService } from "./hero.service";

@Injectable()
export class HeroEffects {
    add$ = createEffect(() => 
        this.actions$.pipe(
            ofType(add),
            mergeMap((hero) => this.heroService.addHero(hero).pipe(
                map(hero => addSuccess(hero))
            ))
        )
    )

    get$ = createEffect(() => 
        this.actions$.pipe(
            ofType(add),
            mergeMap(() => this.heroService.getHeroes().pipe(
                map(heroes => getSuccess({heroes}))
            ))
        )
    )

    update$ = createEffect(() =>
        this.actions$.pipe(
            ofType(update),
            switchMap((data) => this.heroService.updateHero(data).pipe(
                map(hero => updateSuccess(hero))
            ))
        )
    )

    constructor(
        private actions$: Actions,
        private heroService: HeroService,
    ) {}
}