import { Injectable } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

export interface NavigationItem {
  name: string;
  link: string[];
  icon: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    name: 'Dashboard',
    link: ['/dashboard'],
    icon: PrimeIcons.HOME,
  },
];

@Injectable({
  providedIn: 'root',
})
export class NavigationItemsService {
  private _navigationItems: NavigationItem[];
  constructor() {
    this._navigationItems = NAVIGATION_ITEMS;
  }

  get navigationItems() {
    return this._navigationItems;
  }
}
