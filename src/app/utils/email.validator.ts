import { ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  // const domainStr = domains.join('|');
  const regExp = new RegExp(`[A-Za-z0-9\\.\\_\\-]{4,}@gmail\.([A-Za-z]{2,4})`);

  return (control) => {
    const isInvalid = control.value === '' || regExp.test(control.value);
    return isInvalid ? null : { emailValidator: true };
  };
}
