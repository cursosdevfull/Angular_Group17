import { Injectable } from '@angular/core';

import { TMenu } from '../components/dumm/menu/menu.component';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly items: TMenu = [
    {
      route: '/dashboard',
      icon: 'dashboard',
      label: 'Dashboard',
    },
    {
      route: '/user',
      icon: 'people',
      label: 'Users',
    },
    {
      route: '/course',
      icon: 'shopping_cart',
      label: 'Courses',
    },
    {
      route: '/schedule',
      icon: 'settings',
      label: 'Schedule',
    },
    {
      route: '/video',
      icon: 'video_library',
      label: 'Video',
    },
  ];

  constructor() {}

  get getItemsMenu(): TMenu {
    // Object.assign([], this.items)
    return [...this.items];
  }
}
