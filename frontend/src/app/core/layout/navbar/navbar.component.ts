import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="">
      <nav class="navbar border-bottom border-base-300 bg-base-100 px-12 shadow-sm" style="border-bottom-width: 1.5px;">
        <div class="navbar-start gap-8">
          <a routerLink="/home" aria-label="Slop & Fries home">
            <img src="logo.svg" alt="Slop & Fries logo" class="h-10 w-10" />
          </a>

          <ul class="hidden gap-6 md:flex">
            @for (link of links; track link.path) {
              <li>
                <a
                  [routerLink]="link.path"
                  routerLinkActive="opacity-100"
                  class="font-bold text-basecontent opacity-50 hover:opacity-100"
                >
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>
        </div>

        <div class="navbar-end gap-3">
          <a routerLink="/auth/login" class="btn btn-outline btn-primary btn-sm">Sign in</a>
          <a routerLink="/auth/register" class="btn btn-primary btn-sm">Register</a>
        </div>
      </nav>
    </header>
  `,
})
export class NavbarComponent {
  protected readonly links = [
    { label: 'Home', path: '/home' },
    { label: 'Favorite Recipes', path: '/recipes' },
    { label: 'Pantry', path: '/pantry' },
    { label: 'Shopping lists', path: '/shopping-lists' },
    { label: 'Help', path: '/help' },
  ];
}