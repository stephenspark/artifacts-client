import { Injectable } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

export interface NavigationItem {
  label: string;
  route: string[];
  icon: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Dashboard',
    route: ['/dashboard'],
    icon: PrimeIcons.HOME,
  },
  {
    label: 'Characters',
    route: ['/characters'],
    icon: PrimeIcons.USERS,
  },
  {
    label: 'Grand Exchange',
    route: ['/grand-exchange'],
    icon: PrimeIcons.BUILDING_COLUMNS,
  },
  {
    label: 'Account',
    route: ['/account'],
    icon: PrimeIcons.COG,
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
