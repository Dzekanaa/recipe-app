import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Group-level validator: expects controls named `password` and `confirmPassword`.
 * Sets the `mismatch` error on the group when they differ.
 */
export function passwordsMatch(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { mismatch: true };
}
