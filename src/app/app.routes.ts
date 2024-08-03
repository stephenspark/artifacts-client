import { Routes } from '@angular/router';
import { AccountComponent, DashboardComponent } from './components';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account', component: AccountComponent },
];
