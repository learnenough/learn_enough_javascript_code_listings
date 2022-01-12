#!/usr/local/bin/node

let fs = require("fs");
let Phrase = require("<username>-palindrome");

let text = fs.readFileSync("phrases.txt", "utf-8");
text.split("\n").forEach(function(line) {
  let phrase = new Phrase(line);
  if (phrase.palindrome()) {
    console.log("palindrome detected:", line);
  }
});
