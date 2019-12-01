const fs = require('fs');

const cmds = ['SP1;', '\n', 'PA100,100;\n', 'PD;\n'];

const mX = 10300;
const mY = 7650;

for (let x = 100; x < mX / 2; x += 280) {
  for (let y = 100; y < mY / 2; y += 280) {

    if (x % 3 == 0 && y % 5 == 0) cmds.push('SP2;\n');
    else cmds.push('SP1;\n');

    cmds.push('PA' + x + ',' + y + ';\n');
    cmds.push('PD;\n');

    //draw thing
    let a;
    let b;

    if (x % 3 == 0) a = mX - x / 3;
    if (x % 5 == 0) a = mX - x / 5;

    if (y % 3 == 0) b = mY - y / 3;
    if (y % 5 == 0) b = mY - y / 5;

    cmds.push('PA' + a + ',' + b + ';\n');
    cmds.push('PU;\n');
    cmds.push('PA' + x + ',' + y + ';\n');
  }
}

const text = cmds.join('');

fs.writeFile('2pac.hpgl', text, err => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log('Lyric saved!');
});
