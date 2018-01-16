const fs = require('fs');
const split = require('split');
const through = require('through2');


fs.createReadStream('./files/hw.log').pipe(split('2018')).pipe(through(function (chunk, _, next) {
  if (chunk.includes('JavaScript')) {
    this.push(chunk);
  }
  next();
})).pipe(fs.createWriteStream('out.txt'));
