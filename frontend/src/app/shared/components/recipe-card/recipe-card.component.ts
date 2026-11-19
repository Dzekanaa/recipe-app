import { Component, input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  template: `
    <article class="rounded-[8px] bg-base-100 p-4 shadow-md">
      <img
        [src]="imageUrl()"
        [alt]="title()"
        class="aspect-[7/8] w-full rounded-[8px] object-cover"
      />
      <div class="px-3 pt-3 pb-2">
        <h3 class="text-2xl font-bold text-base-content">{{ title() }}</h3>
        <p class="mt-2 text-sm text-secondary font-semibold">
          {{ time() }} | {{ servings() }} servings | {{ calories() }} kcal
        </p>
      </div>
    </article>
  `,
})
export class RecipeCardComponent {
  readonly title = input.required<string>();
  readonly imageUrl = input.required<string>();
  readonly time = input.required<string>();
  readonly servings = input.required<number>();
  readonly calories = input.required<number>();
}