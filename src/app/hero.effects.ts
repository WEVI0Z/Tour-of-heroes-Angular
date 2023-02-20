import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { add, addSuccess, del, delSuccess, get, getSuccess, update, updateSuccess, search, searchSuccess } from "./hero.actions";
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
            ofType(get),
            mergeMap(() => this.heroService.getHeroes().pipe(
                map(heroes => getSuccess({heroes}))
            ))
        )
    )

    update$ = createEffect(() =>
        this.actions$.pipe(
            ofType(update),
            switchMap((hero) => this.heroService.updateHero(hero).pipe(
                map(hero => updateSuccess(hero))
            ))
        )
    )

    del$ = createEffect(() => 
        this.actions$.pipe(
            ofType(del),
            switchMap((hero) => this.heroService.deleteHero(hero).pipe(
                map(hero => delSuccess(hero))
            ))
        )
    )

    search$ = createEffect(() => 
        this.actions$.pipe(
            ofType(search),
            switchMap((data) => this.heroService.searchHeroes(data.name).pipe(
                map(heroes => searchSuccess({ heroes }))
            ))
        )
    )

    constructor(
        private actions$: Actions,
        private heroService: HeroService,
    ) {}
}