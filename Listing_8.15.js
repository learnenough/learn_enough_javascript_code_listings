module.exports = Phrase;
.
.
.
function Phrase(content) {
  .
  .
  .
  // Returns the letters in the content.
  this.letters = function letters() {
    return this.content;    // stub return value
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
