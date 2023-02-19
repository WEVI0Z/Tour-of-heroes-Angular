import { createFeatureSelector, createReducer, createSelector, on, State } from "@ngrx/store";
import { Hero } from "./hero";
import { addSuccess, getSuccess, updateSuccess } from "./hero.actions";

export const initialState: Hero[] = [
];

export const heroReducer = createReducer(
    initialState,
    on(addSuccess, (state, hero) => [...state, hero]),
    on(getSuccess, (state, data) => data.heroes),
    on(updateSuccess, (state, data) => {
        const updatedHeroes = state.map(hero => {
            return data.id === hero.id ? data : hero
        })

        console.log(data);

        return updatedHeroes;
    })
)

export const getHeroesState = createFeatureSelector("heroes");

export const getHeroes = createSelector(
    getHeroesState,
    state => state as Hero[],
)