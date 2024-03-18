import { Action, createReducer, on } from "@ngrx/store";
import { toggleSideBarAction } from "./sidebar.actions";

export const initialSideBarState:boolean = false;

const _sidebarReducer = createReducer(initialSideBarState,
    on(toggleSideBarAction, state => !state));

export const sidebarReducer = (state: boolean | undefined, action: Action) => {
    return _sidebarReducer(state, action);
}