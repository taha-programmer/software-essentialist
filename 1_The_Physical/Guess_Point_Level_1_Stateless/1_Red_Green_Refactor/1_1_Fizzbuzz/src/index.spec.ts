import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  describe('Accept only input of type number, between 1 and 100, and returns string', () => {
    it('throws an error when given non-number input', () => {
      expect(() => fizzbuzz('hello' as any)).toThrow();
    });

    it('throws an error when given -12', () => {
      expect(() => fizzbuzz(-12)).toThrow();
    });

    it('throws an error when given 102', () => {
      expect(() => fizzbuzz(102)).toThrow();
    });

    it('returns a string', () => {
      expect(typeof fizzbuzz(1)).toBe('string');
    });
  });

  describe('return "Fizz" when given a multiple of 3', () => {
    it.each([[3], [9], [42]])('when given %i it returns Fizz', num => {
      expect(fizzbuzz(num)).toBe('Fizz');
    });
  });

  describe('return "Buzz" when given a multiple of 5', () => {
    it.each([[5], [10], [20]])('when given %i it returns Buzz', num => {
      expect(fizzbuzz(num)).toBe('Buzz');
    });
  });

  describe('return "FizzBuzz" when given a multiple of 3 and 5', () => {
    [15, 30, 45, 60, 75, 90].forEach(num => {
      test(`when given ${num} it returns "FizzBuzz"`, () => {
        expect(fizzbuzz(num)).toBe('FizzBuzz');
      });
    });
  });

  it('returns "43" when given 43', () => {
    expect(fizzbuzz(43)).toBe('43');
  });
});
