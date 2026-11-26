import { Component, computed, input } from '@angular/core';

export type AuthWave = 'login' | 'register';

const WAVES: Record<AuthWave, { viewBox: string; d: string }> = {
  login: {
    viewBox: '0 0 217 1024',
    d: 'M217 1024L208.457 999.595C199.913 975.019 182.827 926.208 170.012 877.568C157.197 828.928 148.654 780.459 150.704 731.819C152.583 683.179 165.228 634.368 171.72 585.387C178.213 536.405 178.897 487.595 166.594 438.613C154.292 389.632 129.346 340.821 133.788 292.181C138.402 243.541 172.575 195.072 184.535 146.432C196.496 97.7919 186.244 48.9813 181.118 24.4053L175.992 0H0V24.4053C0 48.9813 0 97.7919 0 146.432C0 195.072 0 243.541 0 292.181C0 340.821 0 389.632 0 438.613C0 487.595 0 536.405 0 585.387C0 634.368 0 683.179 0 731.819C0 780.459 0 828.928 0 877.568C0 926.208 0 975.019 0 999.595V1024H217Z',
  },
  register: {
    viewBox: '0 0 218 1024',
    d: 'M218 1024L205.37 981.333C192.567 938.667 167.306 853.333 147.063 768C126.821 682.667 111.941 597.333 121.111 512C130.281 426.667 163.846 341.333 180.802 256C197.757 170.667 198.449 85.3333 198.622 42.6666L198.968 0H0L0 42.6666C0 85.3333 0 170.667 0 256C0 341.333 0 426.667 0 512C0 597.333 0 682.667 0 768C0 853.333 0 938.667 0 981.333L0 1024H218Z',
  },
};

/**
 * Full-screen shell for the auth pages: cream panel on the left (the form is projected into it),
 * photo background on the right and the wave edge between them.
 * Use `wave="register"` for the register page; the login page uses the default wave.
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
          [attr.viewBox]="shape().viewBox"
          preserveAspectRatio="none"
          aria-hidden="true"
          class="pointer-events-none absolute -top-px left-full -ml-px hidden h-[calc(100%+2px)] w-[calc(clamp(8rem,15vw,14rem)+1px)] md:block"
        >
          <path [attr.d]="shape().d" fill="#FFF7ED" />
        </svg>
      </section>
    </main>
  `,
})
export class AuthShellComponent {
  readonly wave = input<AuthWave>('login');
  protected readonly shape = computed(() => WAVES[this.wave()]);
}
