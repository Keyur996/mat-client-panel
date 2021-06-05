import { FormGroup } from '@angular/forms';

export function ChipsLengthChecker(controlName: string) {
  return (formGroup: FormGroup) => {
    const length = formGroup.get(controlName)?.value.length;
    if (length !== 0) {
      formGroup.controls[controlName].setErrors(null);
    } else {
      formGroup.controls[controlName].setErrors({ mustMatch: true });
    }
  };
}
