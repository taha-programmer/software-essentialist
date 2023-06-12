import { PasswordValidator } from './index';

describe('password validator', () => {
  it('knows that "watermelon" is valid because its between 5 & 15 charachters long', () => {
    let resultObject = PasswordValidator.check('watermelon');
    expect(resultObject.result).toBeTruthy();
    expect(resultObject.errors.length).toBe(0);
  });

})

