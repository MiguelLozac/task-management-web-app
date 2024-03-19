import { Board } from "./board/models/board.model";

export interface AppState {
    sideBarVisible: boolean;
    boards: Board[]; 
}