import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SideBarState } from './state/sidebar.type';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarModule,
    ButtonModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sidebarVisible: boolean = false;

  constructor(private store: Store<SideBarState>) {
    this.store.select('sideBarVisible')
      .subscribe(sideBarState => {
        this.sidebarVisible = sideBarState;
      });
  }

}
