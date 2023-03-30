import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  it('should exist', () => {
    let palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker).toBeDefined();
  });

  it('should return boolean', () => {
    let palindromeChecker = new PalindromeChecker();
    expect(typeof palindromeChecker.isAPalindrome('')).toBe('boolean');
  });

});
