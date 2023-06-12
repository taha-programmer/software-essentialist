import { PasswordValidator } from './index';

describe('password validator', () => {
  describe('Accepts passwords that are between 5 & 15 chars long', () => {
    it.each([
      ['watermelon', true, []],
      ['thinking', true, []],
      ['mom', false, ['InvalidLength']],
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
