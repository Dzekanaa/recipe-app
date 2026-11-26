import { Component } from '@angular/core';

/**
 * Full-screen shell for the auth pages: cream panel on the left (the form is projected into it),
 * photo background on the right and the wave edge between them.
 */
@Component({
  selector: 'app-auth-shell',
  host: { class: 'block' },
  template: `
    <main
      class="relative flex min-h-screen w-full overflow-hidden bg-base-300 bg-cover bg-center"
      style="background-image: url('login-bg.jpg')"
    >
      <section
        class="relative z-10 flex w-full items-center justify-center bg-[#FFF7ED] px-6 py-10 md:w-[clamp(22rem,28vw,30rem)] md:shrink-0"
      >
        <ng-content />

        <svg
          viewBox="0 0 217 1024"
          preserveAspectRatio="none"
          aria-hidden="true"
          class="pointer-events-none absolute -top-px left-full -ml-px hidden h-[calc(100%+2px)] w-[calc(clamp(8rem,15vw,14rem)+1px)] md:block"
        >
          <path
            d="M217 1024L208.457 999.595C199.913 975.019 182.827 926.208 170.012 877.568C157.197 828.928 148.654 780.459 150.704 731.819C152.583 683.179 165.228 634.368 171.72 585.387C178.213 536.405 178.897 487.595 166.594 438.613C154.292 389.632 129.346 340.821 133.788 292.181C138.402 243.541 172.575 195.072 184.535 146.432C196.496 97.7919 186.244 48.9813 181.118 24.4053L175.992 0H0V24.4053C0 48.9813 0 97.7919 0 146.432C0 195.072 0 243.541 0 292.181C0 340.821 0 389.632 0 438.613C0 487.595 0 536.405 0 585.387C0 634.368 0 683.179 0 731.819C0 780.459 0 828.928 0 877.568C0 926.208 0 975.019 0 999.595V1024H217Z"
            fill="#FFF7ED"
          />
        </svg>
      </section>
    </main>
  `,
})
export class AuthShellComponent {}
