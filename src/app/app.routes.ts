import { Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CharactersComponent } from './components/characters/characters.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'account', component: AccountComponent },
];
