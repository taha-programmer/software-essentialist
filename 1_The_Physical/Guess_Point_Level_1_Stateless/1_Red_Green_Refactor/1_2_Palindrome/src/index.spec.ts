import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => (palindromeChecker = new PalindromeChecker()));

  describe('Basic Tests', () => {
    it('should exist', () => {
      expect(palindromeChecker).toBeDefined();
    });

    it('should return boolean', () => {
      expect(typeof palindromeChecker.isAPalindrome('')).toBe('boolean');
    });
  });

  describe('Single words tests', () => {
    it("should know that 'mom' is a palindrome", () => {
      expect(palindromeChecker.isAPalindrome('mom')).toBe(true);
    });

    it("should know that 'bill' is NOT a palindrome", () => {
      expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy();
    });

    it('should know that "Mom" is also a palindrome', () => {
      expect(palindromeChecker.isAPalindrome('Mom')).toBeTruthy();
    });
  });

  describe('Sentences Tests', () => {
    it('should know that "Was It A Rat I Saw" is a palindrome', () => {
      expect(
        palindromeChecker.isAPalindrome('Was It A Rat I Saw')
      ).toBeTruthy();
    });

    it('should know that "Never Odd or Even" is a palindrome', () => {
      expect(palindromeChecker.isAPalindrome('Never Odd or Even')).toBeTruthy();
    });
  });
});
