export class PasswordValidator {
  public static check(input: string) {
    const isBetweenFiveAndFifteen = input.length >= 5 && input.length <= 15;
    const containsAtLeastOneDigit = /\d/.test(input);

    let errors = [];

    if (!isBetweenFiveAndFifteen) errors.push('InvalidLength');
    if (!containsAtLeastOneDigit) errors.push('NoDigitsFound');

    return {
      result: errors.length === 0,
      errors,
    };
  }
}
