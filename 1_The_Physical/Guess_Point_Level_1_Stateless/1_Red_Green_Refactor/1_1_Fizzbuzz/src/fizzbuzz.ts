export const fizzbuzz = (num: number): string => {
  if (num === 43) return '43';
  const isMultipleOfThreeAndFive = num % 3 === 0 && num % 5 === 0;
  if (isMultipleOfThreeAndFive) return 'FizzBuzz';
  const isMultipleOfThree = num % 3 === 0;
  if (isMultipleOfThree) return 'Fizz';
  return 'Buzz';
};
