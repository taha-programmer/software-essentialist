export class PasswordValidator {
  public static check(input: string) {
    const isBetweenFiveAndFifteen = input.length >= 5 && input.length <= 15;

    let errors = [];

    if (!isBetweenFiveAndFifteen) errors.push('InvalidLength');

    return {
      result: errors.length === 0,
      errors,
    };
  }
}
