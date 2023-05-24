export class PalindromeChecker {
  public isPalindrome = (input: string): boolean => {
    const reversed = input.split('').reverse().join('');
    return input.toLowerCase() === reversed.toLowerCase();
  };
}
