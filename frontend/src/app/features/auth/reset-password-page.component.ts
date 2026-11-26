import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordsMatch } from '../../shared/validators/passwords-match.validator';
import { AuthShellComponent } from './auth-shell.component';

@Component({
  selector: 'app-reset-password-page',
  imports: [ReactiveFormsModule, RouterLink, AuthShellComponent],
  template: `
    <!-- Ovde postavljamo flip, register wave i isti background -->
    <app-auth-shell [flip]="true" background="forgot-password-bg.jpg" wave="register">
      <form
        [formGroup]="form"
        (ngSubmit)="submit()"
        class="flex w-full max-w-sm flex-col md:max-w-72"
        novalidate
      >
        <h1 class="text-center text-2xl font-bold text-black">Reset password</h1>
        <p class="mt-2 mb-8 text-center text-sm text-black">Enter a new password</p>

        <div class="flex flex-col gap-1">
          <label for="password" class="ml-1 text-xs font-medium text-black">New password</label>
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

        @if (success()) {
          <div class="alert alert-success mt-4 py-2 text-sm" role="status">
            <span>Your password has been successfully reset.</span>
          </div>
        }

        <button type="submit" class="btn btn-primary mt-6 w-full rounded-lg" [disabled]="loading()">
          Reset password
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
export class ResetPasswordPageComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly error = signal<string | null>(null);
  protected readonly loading = signal(false);
  protected readonly success = signal(false);

  protected readonly form = this.fb.nonNullable.group(
    {
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

    // TODO: call AuthService.resetPassword(this.form.getRawValue().password) once the backend
    // endpoint is ready, then set success(true) or error() on failure.
  }
}
