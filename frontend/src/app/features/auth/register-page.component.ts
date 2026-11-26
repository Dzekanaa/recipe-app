import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordsMatch } from '../../shared/validators/passwords-match.validator';
import { AuthShellComponent } from './auth-shell.component';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, RouterLink, AuthShellComponent],
  template: `
    <app-auth-shell>
      <form
        [formGroup]="form"
        (ngSubmit)="submit()"
        class="flex w-full max-w-sm flex-col md:max-w-72"
        novalidate
      >
        <h1 class="text-center text-2xl font-bold text-black">Register</h1>
        <p class="mt-2 mb-8 text-center text-sm text-black">Create an account</p>

        <div class="flex flex-col gap-1">
          <label for="username" class="ml-1 text-xs font-medium text-black">Username</label>
          <input
            id="username"
            type="text"
            formControlName="username"
            autocomplete="username"
            placeholder="zoki123"
            class="input h-11 w-full rounded-lg border-[#E8D8C8] bg-transparent text-sm placeholder:text-base-content/30"
          />
          @if (form.controls.username.touched && form.controls.username.invalid) {
            <p class="ml-1 text-xs text-error">Username is required.</p>
          }
        </div>

        <div class="mt-5 flex flex-col gap-1">
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
            autocomplete="new-password"
            placeholder="Enter password"
            class="input h-11 w-full rounded-lg border-[#E8D8C8] bg-transparent text-sm placeholder:text-base-content/30"
          />
          @if (form.controls.password.touched && form.controls.password.invalid) {
            <p class="ml-1 text-xs text-error">
              {{
                form.controls.password.hasError('required')
                  ? 'Password is required.'
                  : 'Password must be at least 6 characters.'
              }}
            </p>
          }
        </div>

        <div class="mt-5 flex flex-col gap-1">
          <label for="confirmPassword" class="ml-1 text-xs font-medium text-black">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            type="password"
            formControlName="confirmPassword"
            autocomplete="new-password"
            placeholder="Re-enter password"
            class="input h-11 w-full rounded-lg border-[#E8D8C8] bg-transparent text-sm placeholder:text-base-content/30"
          />
          @if (form.controls.confirmPassword.touched) {
            @if (form.controls.confirmPassword.hasError('required')) {
              <p class="ml-1 text-xs text-error">Please confirm your password.</p>
            } @else if (form.hasError('mismatch')) {
              <p class="ml-1 text-xs text-error">Passwords do not match.</p>
            }
          }
        </div>

        @if (error()) {
          <div class="alert alert-error mt-4 py-2 text-sm" role="alert">
            <span>{{ error() }}</span>
          </div>
        }

        <button type="submit" class="btn btn-primary mt-6 w-full rounded-lg" [disabled]="loading()">
          Register
        </button>

        <p class="mt-5 text-center text-xs text-base-content/70">
          Already have an account?
          <a routerLink="/auth/login" class="font-medium text-base-content hover:underline">
            Sign in.
          </a>
        </p>
      </form>
    </app-auth-shell>
  `,
})
export class RegisterPageComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly error = signal<string | null>(null);
  protected readonly loading = signal(false);

  protected readonly form = this.fb.nonNullable.group(
    {
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordsMatch },
  );

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: add async validators for unique username/email and call AuthService.register(...)
    // once the backend endpoints are ready; then show the activation info or redirect.
  }
}
