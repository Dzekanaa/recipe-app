import { Routes } from '@angular/router';

export const RECIPES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./recipes-page.component').then((m) => m.RecipesPageComponent),
  },
];
