% const sonnet = `Let me not to the marriage of true minds
% .
% .
% .
% But bears it out even to the edge of doom.
%   If this be error and upon me proved,
%   I never writ, nor no man ever loved.`;

% // Unique words.
% let uniques = {};
% // All words in the text
% let words = sonnet.match(/[\w']+/g);

% // Iterate through `words` and build up a hash of unique words.
% words.forEach(function(word) {
%   if (uniques[word]) {
%     uniques[word] += 1;
%   } else {
%     uniques[word] = 1;
%   }
% });

% console.log(uniques)
