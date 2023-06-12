export class PasswordValidator {
  public static check(input: string) {
    const isBetweenFiveAndFifteen = input.length >= 5 && input.length <= 15;
    const containsAtLeastOneDigit = /\d/.test(input);
    const containsAtLeastOneUpperCaseLetter = /[A-Z]/.test(input);

    let errors = [];

    if (!isBetweenFiveAndFifteen) errors.push('InvalidLength');
    if (!containsAtLeastOneDigit) errors.push('NoDigitsFound');
    if (!containsAtLeastOneUpperCaseLetter)
      errors.push('NoUpperCaseLettersFound');

    return {
      result: errors.length === 0,
      errors,
    };
  }
}
