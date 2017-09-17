function partial (fn, ...presetArgs) {
  console.log('presetArgs: ', ...presetArgs)
  return function partialApplied(...laterArgs) {
    console.log('laterArgs: ', ...laterArgs)
    return fn( ...presetArgs, ...laterArgs);
  }
}

function roycode() {
  console.log('Func exectured...');
  return true;
}

function reverseArgs(fn) {
  return function argsReversed(...args){
    return fn(...args.reverse() );
  }
}

// later we can call

var cache = {};

var cacheResult = reverseArgs(
  partial (reverseArgs ( roycode ), function onResult(obj){
    cache[obj.id] = obj;
  })
);

const result = cacheResult( "http://royscheffers.com/api", { user: 11 });
console.log('Result: ', result);
