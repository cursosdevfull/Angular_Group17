import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MenuService } from '../../../services/menu.service';

export interface IRoute {
  route: string;
  icon: string;
  label: string;
}

export type TMenu = IRoute[];

@Component({
  selector: 'cdev-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  items: TMenu;

  constructor(menuService: MenuService) {
    this.items = menuService.getItemsMenu;
  }
}
