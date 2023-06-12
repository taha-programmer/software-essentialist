import { PasswordValidator } from './index';

describe('password validator', () => {
  describe('Accepts passwords that are between 5 & 15 chars long', () => {
    it.each([
      ['watermelon1', true, []],
      ['thinking2', true, []],
      ['mom2', false, ['InvalidLength']],
      ['wh3t', false, ['InvalidLength']],
      ['whyidkJiejajdkajdakkdji9Jjda', false, ['InvalidLength']],
    ])(
      'knows that %s should return %s',
      (input: string, result: boolean, errors: string[]) => {
        let resultObject = PasswordValidator.check(input);
        expect(resultObject.result).toBe(result);
        expect(resultObject.errors).toHaveLength(errors.length);
        expect(resultObject.errors).toEqual(errors);
      }
    );
  });

  describe('Accepts passwords that contains at least 1 digit', () => {
    it.each([
      ['hihow1', true, []],
      ['thatsgr8', true, []],
      ['howareyou', false, ['NoDigitsFound']],
    ])(
      'knows that %s should return %s',
      (input: string, result: boolean, errors: string[]) => {
        let resultObject = PasswordValidator.check(input);
        expect(resultObject.result).toBe(result);
        expect(resultObject.errors).toHaveLength(errors.length);
        expect(resultObject.errors).toEqual(errors);
      }
    );
  });
});
