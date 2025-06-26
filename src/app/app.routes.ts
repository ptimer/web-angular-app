import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) }, 
    { path: 'accounts', loadComponent: () => import('./pages/accounts/accounts').then(m => m.Accounts) },
];
