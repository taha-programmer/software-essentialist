import { PasswordValidator } from './index';

describe('password validator', () => {
  describe('Accepts passwords that are between 5 & 15 chars long', () => {
    it.each([
      ['Watermelon1', true, []],
      ['Thinking2', true, []],
      ['Mom2', false, ['InvalidLength']],
      ['Wh3t', false, ['InvalidLength']],
      ['WhyidkJiejajdkajdakkdji9Jjda', false, ['InvalidLength']],
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
      ['Hihow1', true, []],
      ['Thatsgr8', true, []],
      ['Howareyou', false, ['NoDigitsFound']],
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

  describe('Accepts passwords that contains at least 1 uppercase letter', () => {
    it.each([
      ['yourGr8', true, []],
      ['Gr8Password', true, []],
      ['howareyou1', false, ['NoUpperCaseLettersFound']],
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

  describe('Combines all errors in occurance', () => {
    it.each([
      [
        'hi',
        false,
        ['NoUpperCaseLettersFound', 'InvalidLength', 'NoDigitsFound'],
      ],
      ['gr8', false, ['InvalidLength', 'NoUpperCaseLettersFound']],
      ['howareyou', false, ['NoUpperCaseLettersFound', 'NoDigitsFound']],
    ])(
      'knows that %s should return %s and this collection of errors %s',
      (input: string, result: boolean, errors: string[]) => {
        let resultObject = PasswordValidator.check(input);
        expect(resultObject.result).toBe(result);
        expect(resultObject.errors).toHaveLength(errors.length);
        resultObject.errors.forEach(productionCodeError => {
          expect(errors).toContain(productionCodeError);
        });
      }
    );
  });
});
