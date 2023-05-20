import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it('returns a string', () => {
    expect(typeof fizzbuzz(1)).toBe('string');
  });

  it('returns "Fizz" when given 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('returns "Buzz" when given 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  it('returns "FizzBuzz" when given 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
});
