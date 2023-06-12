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

  it('knows that "hihow1" contains at least 1 digit', () => {
    let resultObject = PasswordValidator.check('hihow1');
    expect(resultObject.result).toBeTruthy();
    expect(resultObject.errors.length).toEqual(0);
  });

  it('knows that "thatsgr8" contains at least 1 digit', () => {
    let resultObject = PasswordValidator.check('thatsgr8');
    expect(resultObject.result).toBeTruthy();
    expect(resultObject.errors.length).toEqual(0);
  });
});
