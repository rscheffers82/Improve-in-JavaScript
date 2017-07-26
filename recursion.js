// Date: 23rd April 2017
// Source: https://www.codewars.com/kata/calculate-string-rotation/train/javascript

// Solution:
const shiftedDiff = (first,second, count) =>
  (first === second) ? count || 0 
  : (count >= first.length) ? -1
  : shiftedDiff(first.slice(-1) + first.slice(0, -1), second, count ? count +=1 : 1);

shiftedDiff("coffee", "ffeeco");

// Date: 23rd April 2017
// Source: https://www.codewars.com/kata/the-book-of-mormon/train/javascript

// Solution:
const Mormons = (startingNumber, reach, target, count) =>
	(startingNumber >= target ) ? 
  	count || 0 : 
    Mormons((startingNumber + startingNumber * reach), reach, target, (count ? count += 1 : 1));

Mormons(40,2,120)   // should return 1
Mormons(40,2,121)   // should return 2
