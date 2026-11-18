import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <h1 class="px-90 py-4 text-2xl font-bold text-basecontent">Home</h1>
    <div class="flex gap-2 px-90">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
    </div>
    <p class="px-90 py-8 font-semibold"> 
    Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum.
    </p>
  `,
})
export class HomePageComponent {}
