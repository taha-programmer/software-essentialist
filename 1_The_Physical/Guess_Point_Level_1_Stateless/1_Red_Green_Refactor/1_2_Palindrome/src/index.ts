export class PalindromeChecker {
  private getReveresedString = (str: string) =>
    str.split('').reverse().join('');

  private removeSpaces = (str: string) =>
    str.split(' ').join('').split(' ').join('');

  isAPalindrome(str: string): boolean {
    const reversed = this.getReveresedString(str);
    return (
      this.removeSpaces(str.toLowerCase()) ===
      this.removeSpaces(reversed.toLowerCase())
    );
  }
}
