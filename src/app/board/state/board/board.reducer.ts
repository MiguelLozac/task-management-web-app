import { Action, createReducer, on } from "@ngrx/store";
import { Board } from "../../models/board.model";
import { crateBoard } from "./board.action";

export const initialState: Board[] = [];

const _boardReducer = createReducer(initialState,
    on(crateBoard, (state, { title }) => [...state, new Board(title)])
);

export const boardReducer = (state: Board[] = initialState, action: Action): Board[] => {
    return _boardReducer(state, action);
}