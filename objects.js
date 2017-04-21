// ------------------------------------------------------------------- \\

// Date: 21st April 2017
// Source: https://www.codewars.com/kata/object-extend/train/javascript
// TASK: make a function that returns a new object, containing all of the properties of any objects passed in as parameters.
// The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.
// Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

// Solution:
const isObject = (obj) => obj !== null && typeof obj ==='object';

const extend = function() {
  let resultObj = {};
  for (let item in arguments) {
    let obj = arguments[item];
    if (isObject(obj)) {
      let entries = Object.entries(obj);
      for (let i = 0; i < entries.length; i++){
        if (!resultObj.hasOwnProperty(entries[i][0])) resultObj[entries[i][0]] = entries[i][1];
      }
    }
  }
  return resultObj;
};
extend({a: 11, b: 12, c: 'hello'}, {d: 'other obj'}, 'string', {e: 'more stuff', f: 'fff'}, {'fff': 'ffff'}, {a: 12});
// will return { a: 12, b: 12, c: 'hello', d: 'other obj', e: 'more stuff', f: 'fff', fff: 'ffff' }

// ------------------------------------------------------------------- \\

// Date: 17th April 2017
// Source: https://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe/javascript

// Task: You will be given an array of objects representing data about developers who have signed up to attend the coding meetup that you are organising for the first time. Your task is to return the number of JavaScript developers coming from Europe.
// 
// Solution:
const countDevelopers = list => list.filter((dev) => 
  dev.continent === "Europe" && 
  dev.language === "JavaScript").length;
