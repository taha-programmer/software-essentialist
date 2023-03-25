import { fizzBuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it('returns a string', () => {
    expect(typeof fizzBuzz(5)).toBe('string');
  });

  it('returns Fizz for 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it("doesn't accepts 0 as an argument because it's not between 1 and 100", () => {
    expect(() => fizzBuzz(0)).toThrow('Too small number');
  });
});
