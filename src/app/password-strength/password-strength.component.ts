import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';

  checkPasswordStrength(): void {}
  isEasyStrength(): boolean {
    const regex = /[a-zA-Z]/;
    const symbolsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const digitsRegex = /\d/;
    return (
      regex.test(this.password) ||
      symbolsRegex.test(this.password) ||
      digitsRegex.test(this.password)
    );
  }

  isMediumStrength(): boolean {
    return (
      (this.password.length >= 8 && this.containsLettersSymbols()) ||
      this.containsLettersDigits() ||
      this.containsDigitsSymbols()
    );
  }

  isStrongStrength(): boolean {
    return (
      this.password.length >= 8 &&
      this.containsLettersSymbols() &&
      this.containsLettersDigits() &&
      this.containsDigitsSymbols()
    );
  }

  containsLettersSymbols(): boolean {
    const regex = /[a-zA-Z]/;
    const symbolsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return regex.test(this.password) && symbolsRegex.test(this.password);
  }

  containsLettersDigits(): boolean {
    const regex = /[a-zA-Z]/;
    const digitsRegex = /\d/;
    return regex.test(this.password) && digitsRegex.test(this.password);
  }

  containsDigitsSymbols(): boolean {
    const digitsRegex = /\d/;
    const symbolsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return digitsRegex.test(this.password) && symbolsRegex.test(this.password);
  }
}
