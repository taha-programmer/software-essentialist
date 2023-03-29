export function fizzBuzz(number: number) {
  if (number < 1) throw new Error('Too small number');
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
}
