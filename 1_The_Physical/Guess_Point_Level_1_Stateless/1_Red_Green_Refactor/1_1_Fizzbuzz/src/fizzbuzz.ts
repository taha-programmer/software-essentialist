export const fizzbuzz = (num: number): string => {
  if (typeof num !== 'number') throw new Error('Input must be a number');
  if (num > 100) throw new Error('Number must be less than 100');
  if (num < 1) throw new Error('Number must be greater than 0');

  const isMultipleOfThreeAndFive = num % 3 === 0 && num % 5 === 0;
  const isMultipleOfThree = num % 3 === 0;
  const isMultipleOfFive = num % 5 === 0;

  if (isMultipleOfThreeAndFive) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  if (isMultipleOfFive) return 'Buzz';

  return num.toString();
};
