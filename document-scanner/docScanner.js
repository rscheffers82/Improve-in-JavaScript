var fs = require('fs');
const filename = process.argv[2];

// basic error handling
if (!filename) {
  console.error('Usage: node docScanner.js <filename.txt>');
  process.exit(0);
}

// function to load the file, cb handles the documentation of words
function loadFile(file, cb) {
  fs.readFile(file, 'utf8', (err, res) => {
    if (err) {
      console.error('Unable to read: ', file);
      process.exit(0);
    }
    return cb(res);
  });
}

// call loadfile and process documentation of words in the following function
loadFile(filename, function(doc) {

  // remove all non-alpha numerical chars except for the space
  // place all text in lower case and place each word in the arrDoc array
  let arrDoc = doc.replace(/[^0-9a-z ]/gi, '').toLowerCase().split(' ');

  // Keep track of each word and its occurrence
  let result = arrDoc.reduce(function(acc, current) {
    (!acc.hasOwnProperty(current)) ? acc[current] = 1 : acc[current]++;
    return acc;
  },{});

  // move the object in an array to be able to sort it
  let sortedRes = [];
  for (word in result) sortedRes.push({ word: word, count: result[word] });
  sortedRes.sort((a, b) => b.count - a.count);

  // place the sorted array back into an object (in a sorted manner)
  let sortedObj = {};
  for (obj in sortedRes) {
    let word = sortedRes[obj].word;
    let count = sortedRes[obj].count;
    sortedObj[word] = count;
  };

  // display the end result
  console.log ('------- Results -------');
  console.warn(sortedObj);
});
