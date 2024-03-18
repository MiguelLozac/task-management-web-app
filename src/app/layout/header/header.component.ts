import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { SideBarState } from '../state/sidebar.type';
import { toggleSideBarAction } from '../state/sidebar.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule  
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private store: Store<SideBarState>) {}

  toggleSideBar() {
    this.store.dispatch(toggleSideBarAction())
  }
}
