import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it('returns a string', () => {
    expect(typeof fizzbuzz(1)).toBe('string');
  });

  describe('return "Fizz" when given a multiple of 3', () => {
    it('returns "Fizz" when given 3', () => {
      expect(fizzbuzz(3)).toBe('Fizz');
    });

    it('returns "Fizz" when given 9', () => {
      expect(fizzbuzz(9)).toBe('Fizz');
    });

    it('returns "Fizz" when given 42', () => {
      expect(fizzbuzz(42)).toBe('Fizz');
    });
  });

  it('returns "Buzz" when given 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  describe('return "FizzBuzz" when given a multiple of 3 and 5', () => {
    it('returns "FizzBuzz" when given 15', () => {
      expect(fizzbuzz(15)).toBe('FizzBuzz');
    });

    it('returns "FizzBuzz" when given 45', () => {
      expect(fizzbuzz(45)).toBe('FizzBuzz');
    });
  });

  it('returns "43" when given 43', () => {
    expect(fizzbuzz(43)).toBe('43');
  });
});
