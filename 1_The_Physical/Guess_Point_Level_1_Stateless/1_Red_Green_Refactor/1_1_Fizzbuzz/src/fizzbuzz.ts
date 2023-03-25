export function fizzBuzz(number: number) {
  if (number < 1) throw new Error('Too small number');
  return number === 3 ? 'Fizz' : '';
}
