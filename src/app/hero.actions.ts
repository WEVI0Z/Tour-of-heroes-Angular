import { createAction, props } from "@ngrx/store";
import { Hero } from "./hero";

export const add = createAction(
    "ADD",
    props<Hero>()
);

export const addSuccess = createAction(
    "ADD_SUCCESS",
    props<Hero>()
);

export const get = createAction(
    "GET"
)

export const getSuccess = createAction(
    "GET_SUCCESS",
    props<{heroes: Hero[]}>()
)

export const update = createAction(
    "UPDATE",
    props<Hero>()
)

export const updateSuccess = createAction(
    "UPDATE_SUCCESS",
    props<Hero>()
)

export const del = createAction(
    "DELETE",
    props<Hero>()
)

export const delSuccess = createAction(
    "DELETE_SUCCESS",
    props<Hero>()
)

export const search = createAction(
    "SEACRH",
    props<{name: string}>()
)

export const searchSuccess = createAction(
    "SEACRH_SUCCESS",
    props<{heroes: Hero[]}>()
)