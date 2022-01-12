#!/usr/local/bin/node

let urllib = require("urllib");
let Phrase = require("<username>-palindrome");
let url = 'https://cdn.learnenough.com/phrases.txt'

urllib.request(url, { followRedirect: true }, function(error, data, response) {
  let body  = data.toString();
  let lines = body.split("\n");
  let palindromes = lines.filter(line => /* FILL IN */);

  palindromes.forEach(function(palindrome) {
    console.log("palindrome detected:", palindrome);
  });
});
