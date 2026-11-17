import { Routes } from '@angular/router';

export const SHOPPING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./shopping-page.component').then((m) => m.ShoppingPageComponent),
  },
];
