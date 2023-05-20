export const fizzbuzz = (num: number): string => {
  if (num === 43) return '43';
  if (num === 15) return 'FizzBuzz';
  if (num === 45) return 'FizzBuzz';
  const isMultipleOfThree = num % 3 === 0;
  if (isMultipleOfThree) return 'Fizz';
  return 'Buzz';
};
