describe("Phrase", function() {
  .
  .
  .
  describe("#palindrome", function() {
    .
    .
    .
  });

  describe("#letters", function() {
    it("should return only letters", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });

    it("should return the empty string on no match", function() {
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(), "");
    });
  });
});
