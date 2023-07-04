import { FormLogin } from './formLogin';
import { AbstractControl, FormBuilder } from '@angular/forms';

describe('Test Forms', () => {
  let component: FormLogin;
  let email: AbstractControl | null;

  beforeEach(() => {
    component = new FormLogin(new FormBuilder());
    email = component.form.get('email');
  });

  it('should create a form with 2 fields', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('should email be required', () => {
    email?.setValue('')
    expect(email?.valid).toBeFalsy()
  });

  it('should email be valid format', () => {
    email?.setValue('carlos8_alb@')
    expect(email?.valid).toBeFalsy()
  });

});
