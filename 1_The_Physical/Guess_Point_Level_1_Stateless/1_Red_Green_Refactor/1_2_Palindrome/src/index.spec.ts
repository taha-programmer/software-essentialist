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

  it('knows that "xMomx" is a palindrome', () => {
    expect(palindromeChecker.isPalindrome('xMomx')).toBe(true);
  });

  it('knows that "Was It A Rat I Saw" is a palindrome', () => {
    expect(palindromeChecker.isPalindrome('Was It A Rat I Saw')).toBe(true);
  });

  it('knows that "bill" is NOT a palindrome', () => {
    expect(palindromeChecker.isPalindrome('bill')).toBe(false);
  });

  it('knows that "Never Odd or Even" is a palindrome', () => {
    expect(palindromeChecker.isPalindrome('Never Odd or Even')).toBe(true);
  });
});
