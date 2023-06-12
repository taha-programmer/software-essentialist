import { PasswordValidator } from './index';

describe('password validator', () => {
  it('knows that "watermelon" is valid because its between 5 & 15 charachters long', () => {
    let resultObject = PasswordValidator.check('watermelon');
    expect(resultObject.result).toBeTruthy();
    expect(resultObject.errors.length).toBe(0);
  });

  it('knows that "thinking" is valid because its between 5 & 15 charachters long', () => {
    let resultObject = PasswordValidator.check('thinking');
    expect(resultObject.result).toBeTruthy();
    expect(resultObject.errors.length).toBe(0);
  });

