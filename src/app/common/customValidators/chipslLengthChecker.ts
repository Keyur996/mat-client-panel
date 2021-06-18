import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ChipsLengthChecker(): ValidatorFn {
  return (controlName: AbstractControl): { [key: string]: any } | null => {
    const length: number = controlName.value ? controlName.value.length : 0;
    return length !== 0 ? null : { mustMatch: true };
  };
}
