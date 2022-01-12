#!/usr/local/bin/node

let urllib = require("urllib");
let Phrase = require("mhartl-palindrome");
let url = 'https://cdn.learnenough.com/phrases.txt'

urllib.request(url, { followRedirect: true }, function(error, data, response) {
  let body = data.toString();
  body.split("\n").forEach(function(line) {
    let phrase = new Phrase(line);
    if (phrase.palindrome()) {
      console.log("palindrome detected:", line);
    }
  });
});

