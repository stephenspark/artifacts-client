import { Component } from '@angular/core';
import { NavigationItemsService, NavigationItem } from '../../services';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  navigationItems: NavigationItem[];
  constructor(private navigationItemsService: NavigationItemsService) {
    this.navigationItems = this.navigationItemsService.navigationItems;
  }
}
