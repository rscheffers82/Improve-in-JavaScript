// helper function
function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(nextArg){
      var args = prevArgs.concat( [nextArg] );

      if (args.length >= arity) {
        return fn( ...args);
      } else {
        return nextCurried( args);
      }
    }
  })( [] );
}

const add = (x,y) => x+y;

const result1 = [1, 2, 3, 4, 5].map( curry ( add)(3) );
console.log('1st map function: ', result1);

// advantage of currying above partial (function is first defined but value only later)
const adder = curry (add);

// later specify the value to add with
const result2 = [1, 2, 3, 4, 5].map (adder(7) );
console.log('2nd map function: ', result2);
