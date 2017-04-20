// Date: 17th April 2017
// Source: https://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe/javascript

// Task: You will be given an array of objects representing data about developers who have signed up to attend the coding meetup that you are organising for the first time. Your task is to return the number of JavaScript developers coming from Europe.
// 
// Solution:
const countDevelopers = list => list.filter((dev) => 
  dev.continent === "Europe" && 
  dev.language === "JavaScript").length;
