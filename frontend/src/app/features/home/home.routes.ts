import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./home-page.component').then((m) => m.HomePageComponent),
  },
];
