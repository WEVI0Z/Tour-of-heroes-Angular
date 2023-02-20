import { createReducer, on } from "@ngrx/store";
import { Hero } from "./hero";
import { addSuccess, delSuccess, getSuccess, updateSuccess } from "./hero.actions";

export const initialState: Hero[] = [
];

export const heroReducer = createReducer(
    initialState,
    on(getSuccess, (state, data) => {
        return data.heroes
    }),
    on(addSuccess, (state, hero) => [...state, hero]),
    on(updateSuccess, (state, data) => {
        return state.map(hero => {
            return data.id === hero.id ? data : hero
        })
    }),
    on(delSuccess, (state, data) => {
        return state.filter(hero => data.id !== hero.id)
    })
)