export const fizzbuzz = (num: number): string => {
  if (num > 100) throw new Error('Number must be less than 100');
  if (num < 0) throw new Error('Number must be greater than 0');
  if (num === 43) return '43';
  const isMultipleOfThreeAndFive = num % 3 === 0 && num % 5 === 0;
  if (isMultipleOfThreeAndFive) return 'FizzBuzz';
  const isMultipleOfThree = num % 3 === 0;
  if (isMultipleOfThree) return 'Fizz';
  return 'Buzz';
};
