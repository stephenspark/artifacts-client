import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },
  {
    path: 'characters',
    loadComponent: () =>
      import('./components/characters/characters.component').then(
        (m) => m.CharactersComponent,
      ),
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./components/account/account.component').then(
        (m) => m.AccountComponent,
      ),
  },
];
