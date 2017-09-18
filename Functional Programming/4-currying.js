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

const result = [1, 2, 3, 4, 5].map( curry ( add)(3) );

console.log(result);
