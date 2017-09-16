// structure that takes initial and final arguments

function roycode() {
  console.log('Roy Scheffers...')
  console.log(arguments)
}

function partial (fn, ...presetArgs) {
  console.log('presetArgs: ', ...presetArgs)
  return function partialApplied(...laterArgs) {
    console.log('laterArgs: ', ...laterArgs)
    return fn( ...presetArgs, ...laterArgs);
  }
}


var getPerson = partial( roycode, "http://some.api/person", "Zorana", "Nedjo", { name: 'Roy', age: '23'} );
getPerson('hello', 12);
