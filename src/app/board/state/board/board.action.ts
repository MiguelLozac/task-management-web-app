import { createAction, props } from "@ngrx/store";

export const crateBoard = createAction(
    '[BOARD] Create Board',
    props<{ title: string}>()
);