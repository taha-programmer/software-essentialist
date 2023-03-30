export function fizzBuzz(number: number) {
  if (number < 1) throw new Error('Too small number');
  if (number > 100) throw new Error('Too large number');

  const isMultipleOfThree = (number: number) => number % 3 === 0;
  const isMultipleOfFive = (number: number) => number % 5 === 0;

  if (isMultipleOfThree(number) && isMultipleOfFive(number)) return 'FizzBuzz';
  if (isMultipleOfThree(number)) return 'Fizz';
  if (isMultipleOfFive(number)) return 'Buzz';
  return '';
}
