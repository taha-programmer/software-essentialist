import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;
  palindromeChecker = new PalindromeChecker();

  it.each([
    ['mom', true],
    ['mom', true],
    ['dad', true],
    ['racecar', true],
    ['madam', true],
    ['level', true],
    ['refer', true],
    ['wow', true],
    ['radar', true],
    ['tenet', true],
    ['stats', true],
    ['noon', true],
  ])('knows that "%s" is a palindrome', (input, expected) => {
    expect(palindromeChecker.isPalindrome(input)).toBe(expected);
  });

  it.each([
    ['Mom', true],
    ['MoM', true],
    ['xMomx', true],
  ])(
    'Recognizes palindromes even when casing is off such as "%s"',
    (input, expected) => {
      expect(palindromeChecker.isPalindrome(input)).toBe(expected);
    }
  );

  it.each([
    ['Was It A Rat I Saw', true],
    ['Never Odd or Even', true],
    ['1Never Odd or Even1', true],
  ])(
    'Recognizes palindrome sentences even when casing is off such as "%s"',
    (input, expected) => {
      expect(palindromeChecker.isPalindrome(input)).toBe(expected);
    }
  );

  it.each([
    ['Momx', false],
    ['bill', false],
    ['Never Odd or Even1', false],
  ])(
    'Recognizes words and sentences that are not palindromes, such as "%s"',
    (input, expected) => {
      expect(palindromeChecker.isPalindrome(input)).toBe(expected);
    }
  );
});
