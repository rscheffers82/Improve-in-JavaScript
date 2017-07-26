// Date: 29th April 2017
// Source: https://www.codewars.com/kata/the-wrong-way-cow/javascript
// Solution:

const findWrongWayCow = (field) => {
  console.log(field);

  // two helper functions
  const findHorizontal = (find) => {
    for (let i = 0; i < field.length; i++){
      let pos = field[i].join('').indexOf(find);
      if (pos > -1) return [pos + (find === 'woc' ? 2 : 0), i];
    }
  };

  const findVertical = (find) => {
    for (let i = 0; i < field[0].length; i++){
      let column = '';
      for (let j = 0; j < field.length; j++) column += field[j][i];
      let pos = column.indexOf(find);
      if (pos > -1) return [i, pos + (find === 'woc' ? 2 : 0)];
    }
  };
  
  let dir = {};
  dir.hCow = 0, dir.hWoc = 0, dir.vCow = 0, dir.vWoc = 0;
  
  // horizontal scan
  for (let i = 0; i < field.length; i++){
    let addC = field[i].join('').match(/cow/g);
    let addW = field[i].join('').match(/woc/g);
    dir.hCow += addC !== null ? addC.length : 0;
    dir.hWoc += addW !== null ? addW.length : 0;
  }
  
  // vertical scan
  for (let i = 0; i < field[0].length; i++){
    let column = '';
    for (let j = 0; j < field.length; j++) column += field[j][i];
    let addC = column.match(/cow/g);
    let addW = column.match(/woc/g);
    dir.vCow += addC !== null ? addC.length : 0;
    dir.vWoc += addW !== null ? addW.length : 0;
  }
  
  console.log('---');
  console.log('hCow', dir.hCow);
  console.log('hWoc', dir.hWoc);  
  console.log('vCow', dir.vCow);
  console.log('vWoc', dir.vWoc);
  console.log('---');

  let arrDir = [];
  for (let item in dir){
    arrDir.push([item, dir[item]]);
  }

  let cowDir = arrDir.sort((a, b) => b[1] - a[1]);
  let find = cowDir[1][0].slice(1).toLowerCase();
  let direction = cowDir[1][0].slice(0, 1).toLowerCase();
  
  return direction === 'h' ? findHorizontal(find) : findVertical(find);
};

// Example
var field = [
  [ 'c', 'o', 'w', 'c' ],
  [ 'c', 'o', 'w', 'o' ],
  [ 'c', 'o', 'w', 'w' ],
  [ 'c', 'o', 'w', '.' ]
];

findWrongWayCow(field);
