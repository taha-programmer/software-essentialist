import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => (palindromeChecker = new PalindromeChecker()));

  it('should exist', () => {
    expect(palindromeChecker).toBeDefined();
  });

  it('should return boolean', () => {
    expect(typeof palindromeChecker.isAPalindrome('')).toBe('boolean');
  });

  it("should know that 'mom' is a palindrome", () => {
    expect(palindromeChecker.isAPalindrome('mom')).toBe(true);
  });
});
