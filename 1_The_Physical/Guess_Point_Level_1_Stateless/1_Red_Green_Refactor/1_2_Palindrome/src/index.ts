export class PalindromeChecker {
  isAPalindrome(str: string): boolean {
    return str.split('').join('') === str.split('').reverse().join('');
  }
}
