---
// Date: 17th April 2017
// Source: https://www.codewars.com/kata/organise-duplicate-numbers-in-list/train/javascript
// Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

// Solution:
const group = arr => arr.reduce((groups, value) => {

    var index = groups.findIndex((elem) => elem[0] === value);
    if (index >= 0) {
      groups[index].push(value);
      return groups;
    } else return [...groups, [value]];

  }, []);
}
group([3, 2, 6, 2, 1, 3]);

// DATE: 16th April 2017
// Source: https://www.codewars.com/kata/56f399b59821793533000683

// solution
function sortCards(array){
  let ideal = "A23456789TJQK";
    return array.sort( (a,b) => ideal.indexOf(a) - ideal.indexOf(b) );
  }

sortCards(["A", 9 ,5,"T",8,2,4,"Q",7,"J",6,"K"]);
---------
// DATE: 16th April 2017
// Source: https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

function flattenAndSort(array) {
  return array
    .reduce(function(acc, val){ return acc.concat(val); }, [])
    .sort((a,b) => a-b);
}
flattenAndSort([[1,5,7,8],[3,4,5,8,9,9,0,0],[1],[],[9,0,3,1]]);
