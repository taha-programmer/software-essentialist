import { PasswordValidator } from './index';

describe('password validator', () => {
  describe('Accepts passwords that are between 5 & 15 chars long', () => {
    test.each`
      input                             | result   | not      | errors
      ${'Watermelon1'}                  | ${true}  | ${''}    | ${[]}
      ${'Thinking2'}                    | ${true}  | ${''}    | ${[]}
      ${'Mom2'}                         | ${false} | ${'not'} | ${['InvalidLength']}
      ${'Wh3t'}                         | ${false} | ${'not'} | ${['InvalidLength']}
      ${'WhyidkJiejajdkajdakkdji9Jjda'} | ${false} | ${'not'} | ${['InvalidLength']}
      ${'thePhysical1234567'}           | ${false} | ${'not'} | ${['InvalidLength']}
    `(
      "knows that $input is $not valid because it's $not between 5-15 chars long",
      ({ input, result, errors }) => {
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
      ['maxwellTheBe', false, ['NoDigitsFound']],
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
      ['maxwell1_c', false, ['NoUpperCaseLettersFound']],
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
