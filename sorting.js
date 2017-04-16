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
