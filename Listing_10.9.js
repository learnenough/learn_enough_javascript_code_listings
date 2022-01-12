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

  // Grab all the paragraphs and references.
  let paragraphs = document.querySelectorAll("p");
  let references = document.querySelectorAll(".reference");

  // Remove any references.
  references.forEach(function(reference) {
    reference.remove();
  });

  // Print out all of the paragraphs.
  paragraphs.forEach(function(paragraph) {
    console.log(paragraph.textContent);
  });
});
