function partial (fn, ...presetArgs) {
  console.log('presetArgs: ', ...presetArgs)
  return function partialApplied(...laterArgs) {
    console.log('laterArgs: ', ...laterArgs)
    return fn( ...presetArgs, ...laterArgs);
  }
}

const add = (x,y) => x+y;

// signature of map doesn't match with that of add.
[1,2,3,4,5].map( function adder(val) {
  return add( 3, val );
} );

const result = [1,2,3,4,5].map( partial( add, 3) );
console.log('Result: ', result);
