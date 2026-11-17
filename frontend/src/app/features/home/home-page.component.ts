import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <h1 class="p-4 text-2xl font-bold text-primary">Home</h1>
    <div class="flex gap-2 px-4">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
    </div>
  `,
})
export class HomePageComponent {}
