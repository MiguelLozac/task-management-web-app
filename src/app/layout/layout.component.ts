import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { BoardComponent } from '../board/board.component';
import { AppState } from '../app.state';
import { Board } from '../board/models/board.model';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import { crateBoard } from '../board/state/board/board.action';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarModule,
    ButtonModule,
    BoardComponent,
    RippleModule,
    DialogModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sidebarVisible: boolean = false;
  boardsCount: number = 0;
  boards: Board[] = [];
  createBoardVisible: boolean = false;
  boardTitle: string = '';

  constructor(private store: Store<AppState>) {
    this.store.select('sideBarVisible')
      .subscribe(sideBarState => {
        this.sidebarVisible = sideBarState;
      });

    this.store.select('boards')
      .subscribe(boards => {
        this.boardsCount = boards.length;
        this.boards = boards;
      });
  }

  onCreateBoard(): void {
    if (this.boardTitle.length === 0) return
    this.store.dispatch(crateBoard({title: this.boardTitle}));
    this.boardTitle = '';
    this.createBoardVisible = false;
  }

}
