function isPalindrome(word) {
  // Convert the word into an array, reverse it, and join it back
  const reversed = word.split("").reverse().join("");
  // Return true if the word is the same forward and backward
  return word === reversed;
}

// Export (if your tests use require)
module.exports = isPalindrome;
