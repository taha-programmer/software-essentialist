import { PasswordValidator } from './index';

describe('password validator', () => {
  describe('Accepts passwords that are between 5 & 15 chars length', () => {
    it('knows that "watermelon" is valid because its between 5 & 15 charachters long', () => {
      let resultObject = PasswordValidator.check('watermelon');
      let errorsLength = resultObject.errors.length;

      expect(resultObject.result).toBeTruthy();
      expect(resultObject.errors.length).toBe(errorsLength);
    });

    it('knows that "thinking" is valid because its between 5 & 15 charachters long', () => {
      let resultObject = PasswordValidator.check('thinking');
      let errorsLength = resultObject.errors.length;
      expect(resultObject.result).toBeTruthy();
      expect(resultObject.errors.length).toBe(errorsLength);
    });

    it('knows that "mom" is NOT valid because it\'s NOT between 5 & 15 charachters long', () => {
      let resultObject = PasswordValidator.check('mom');
      let errorsLength = resultObject.errors.length;
      expect(resultObject.result).toBeFalsy();
      expect(resultObject.errors.length).toBe(errorsLength);
      expect(resultObject.errors[0]).toBe('InvalidLength');
    });
  });
});
