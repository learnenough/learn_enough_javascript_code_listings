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
  });
});
