import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthShellComponent } from './auth-shell.component';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, RouterLink, AuthShellComponent],
  template: `
    <app-auth-shell>
      <form
        [formGroup]="form"
        (ngSubmit)="submit()"
        class="flex w-full max-w-sm flex-col md:max-w-72"
        novalidate
      >
        <h1 class="text-center text-2xl font-bold text-black">Sign in</h1>
        <p class="mt-2 mb-8 text-center text-sm text-black">Sign into your account</p>

        <div class="flex flex-col gap-1">
          <label for="email" class="ml-1 text-xs font-medium text-black">Email</label>
          <input
            id="email"
            type="email"
            formControlName="email"
            autocomplete="email"
            placeholder="zoki@example.com"
            class="input h-11 w-full rounded-lg border-[#E8D8C8] bg-transparent text-sm placeholder:text-base-content/30"
          />
          @if (form.controls.email.touched && form.controls.email.invalid) {
            <p class="ml-1 text-xs text-error">
              {{
                form.controls.email.hasError('required')
                  ? 'Email is required.'
                  : 'Enter a valid email address.'
              }}
            </p>
          }
        </div>

        <div class="mt-5 flex flex-col gap-1">
          <label for="password" class="ml-1 text-xs font-medium text-black">Password</label>
          <input
            id="password"
            type="password"
            formControlName="password"
            autocomplete="current-password"
            placeholder="Enter password"
            class="input h-11 w-full rounded-lg border-[#E8D8C8] bg-transparent text-sm placeholder:text-base-content/30"
          />
          @if (form.controls.password.touched && form.controls.password.invalid) {
            <p class="ml-1 text-xs text-error">Password is required.</p>
          }
        </div>

        <a
          routerLink="/auth/forgot-password"
          class="mt-4 ml-1 w-fit text-xs font-medium text-base-content hover:underline"
        >
          Forgot password?
        </a>

        @if (error()) {
          <div class="alert alert-error mt-4 py-2 text-sm" role="alert">
            <span>{{ error() }}</span>
          </div>
        }

        <button type="submit" class="btn btn-primary mt-4 w-full rounded-lg" [disabled]="loading()">
          Sign in
        </button>

        <p class="mt-5 text-center text-xs text-base-content/70">
          Don't have an account?
          <a routerLink="/auth/register" class="font-medium text-base-content hover:underline">
            Register.
          </a>
        </p>
      </form>
    </app-auth-shell>
  `,
})
export class LoginPageComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly error = signal<string | null>(null);
  protected readonly loading = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: call AuthService.login(this.form.getRawValue()) once the backend endpoint is ready,
    // then set loading/error and navigate to /home on success.
  }
}
