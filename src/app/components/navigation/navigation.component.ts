import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NavigationItemsService,
  NavigationItem,
} from '../../services/navigation-items/navigation-items.service';
import { TokenService } from '../../services/token/token.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TabMenuModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  navigationItems: NavigationItem[];
  token: string;

  constructor(
    private navigationItemsService: NavigationItemsService,
    private tokenService: TokenService,
  ) {
    this.token = this.tokenService.token;
    this.navigationItems = this.navigationItemsService.navigationItems;
  }
}
