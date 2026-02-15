import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./features/auth/pages/welcome/welcome.component').then((m) => m.WelcomeComponent),
  },
  // Add more routes here as you build out the app
  // {
  //   path: 'home',
  //   loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  // },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/pages/profile/profile.component').then((m) => m.ProfileComponent),
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];
