import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;
  palindromeChecker = new PalindromeChecker();

  it('knows that "mom" is a palindrome', () => {
    expect(palindromeChecker.isPalindrome('mom')).toBe(true);
  });

  it('knows that "Mom" is a palindrome', () => {
    expect(palindromeChecker.isPalindrome('Mom')).toBe(true);
  });

  it('knows that "MoM" is a palindrome', () => {
    expect(palindromeChecker.isPalindrome('MoM')).toBe(true);
  });

  it('knows that "Momx" is NOT a palindrome', () => {
    expect(palindromeChecker.isPalindrome('Momx')).toBe(false);
  });
});
