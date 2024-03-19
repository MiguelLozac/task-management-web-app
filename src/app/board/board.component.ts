import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { List } from './models/list.type';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  lists: List[] = [];
  constructor() {}


}
