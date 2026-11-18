import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-base-200 p-4 text-center text-xs text-basecontent border-base-300 border-top" style="border-top-width: 1.5px;">
      © {{ year }} 2GuysSlop&amp;Fries
    </footer>
  `,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}