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