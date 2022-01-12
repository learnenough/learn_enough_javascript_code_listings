.
.
.
// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
}

TranslatedPhrase.prototype = new Phrase();
