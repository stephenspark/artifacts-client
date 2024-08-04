import { Injectable } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

export interface NavigationItem {
  label: string;
  route: string[];
  icon: string;
  requiresToken: boolean;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Dashboard',
    route: ['/dashboard'],
    icon: PrimeIcons.HOME,
    requiresToken: true,
  },
  {
    label: 'Characters',
    route: ['/characters'],
    icon: PrimeIcons.USERS,
    requiresToken: true,
  },
  {
    label: 'Grand Exchange',
    route: ['/grand-exchange'],
    icon: PrimeIcons.BUILDING_COLUMNS,
    requiresToken: true,
  },
  {
    label: 'Account',
    route: ['/account'],
    icon: PrimeIcons.COG,
    requiresToken: false,
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
