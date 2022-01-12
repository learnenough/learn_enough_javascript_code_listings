#!/usr/local/bin/node

// Returns the paragraphs from a Wikipedia link, stripped of reference numbers.

let urllib = require("urllib");
let url = process.argv[2];

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
