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

  it('returns Buzz for multiples of 5', () => {
    [5, 10, 20, 25, 35, 40, 50, 55]
      .map(multiple => fizzBuzz(multiple))
      .forEach(m => expect(m).toEqual('Buzz'));
  });

  it('returns FizzBuzz for multipls of both 3 & 5', () => {
    let multiples = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150];
    multiples
      .map(multiple => fizzBuzz(multiple))
      .forEach(m => expect(m).toEqual('FizzBuzz'));
  });
});
