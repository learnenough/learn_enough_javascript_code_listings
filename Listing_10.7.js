#!/usr/local/bin/node

// Returns the paragraphs from a Wikipedia link, stripped of reference numbers.

let urllib = require("urllib");
let url = process.argv[2];

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

urllib.request(url, { followRedirect: true }, function(error, data, response) {
  let body = data.toString();
  // Simulate a Document Object Model.
  let { document } = (new JSDOM(body)).window;
});
