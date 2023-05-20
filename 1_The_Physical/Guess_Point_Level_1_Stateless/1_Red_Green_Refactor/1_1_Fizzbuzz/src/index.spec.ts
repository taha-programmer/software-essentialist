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

  describe('return "Buzz" when given a multiple of 5', () => {
    it('returns "Buzz" when given 5', () => {
      expect(fizzbuzz(5)).toBe('Buzz');
    });
    it('returns "Buzz" when given 10', () => {
      expect(fizzbuzz(10)).toBe('Buzz');
    });
    it('returns "Buzz" when given 20', () => {
      expect(fizzbuzz(20)).toBe('Buzz');
    });
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

  it('throws an error when given 102', () => {
    expect(() => fizzbuzz(102)).toThrow();
  });

  it('throws an error when given -12', () => {
    expect(() => fizzbuzz(-12)).toThrow();
  });

  it('throws an error when given non-number input', () => {
    expect(() => fizzbuzz('hello' as any)).toThrow();
  });
});
