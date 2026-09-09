import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  imports: [Menu],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
