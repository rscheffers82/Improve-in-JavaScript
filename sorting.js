// Date: 22nd April 2017
// Description: https://www.codewars.com/kata/acme-factory-needs-your-help/javascript
// Solution:
const factory = (assemblyLines) => {
  if (!assemblyLines || assemblyLines.length === 0 ) return [];
  
  const isFunc = (functionToCheck) => {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }
  
  var shipment = [];
  for (let assembly in assemblyLines) {
    if (isFunc(assemblyLines[assembly])) {
      assemblyLines[assembly] = assemblyLines[assembly]();
    }
    for (let item in assemblyLines[assembly]) {
      let prodObj = assemblyLines[assembly][item];
      prodObj.priority = prodObj.priority || 999;
      shipment.push([prodObj.item, prodObj.priority]);
    }
  }
  shipment.sort((a,b) => a[1]-b[1]);                                      // sort items
  shipment = shipment.reduce((acc, item) => [...acc, item[0]], []);       // strip priority
  
  return shipment.reduce((acc, item) => {                                 // package items by the 10
    let last = acc.length-1;
    if (acc[last].length >= 10) acc.push([item])
    else acc[last].push(item);
    return acc;
  }, [[]]);
}

factory([
    [{item: 'item 3', priority: 3}, {item: 'item 1', priority: 1}],
    [{item: 'item 2', priority: 2}],    
    [{item: 'item 22', priority: 22}],
    [{item: 'item 33', priority: 33}, {item: 'item 1', priority: 1}],
    [{item: 'item 12', priority: 12}],    
    [{item: 'item 23', priority: 23}],
    [{item: 'item 30', priority: 30}, {item: 'item 10', priority: 10}],
    [{item: 'item 24', priority: 24}],    
    [{item: 'item 26', priority: 26}],
    [{item: 'item 91'}],
    function() {return [
      {item: 'func-item 1', priority: 111}, {item: 'func-item 2', priority: 122}
    ]},
  ]);

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

// ---
// date: 16th April 2017
// Source: https://www.codewars.com/kata/56f399b59821793533000683

// solution
function sortCards(array){
  let ideal = "A23456789TJQK";
    return array.sort( (a,b) => ideal.indexOf(a) - ideal.indexOf(b) );
  }

sortCards(["A", 9 ,5,"T",8,2,4,"Q",7,"J",6,"K"]);

// ---
// DATE: 16th April 2017
// Source: https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

function flattenAndSort(array) {
  return array
    .reduce(function(acc, val){ return acc.concat(val); }, [])
    .sort((a,b) => a-b);
}
flattenAndSort([[1,5,7,8],[3,4,5,8,9,9,0,0],[1],[],[9,0,3,1]]);
