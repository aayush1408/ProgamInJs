'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    var sumDiagonals = {main: 0, second: 0},
    arrLength = arr.length;

  for (var i = 0; i < arrLength; i++) {
    sumDiagonals.main += arr[i][i];
    sumDiagonals.second += arr[i][arrLength-i-1];
  }
  return sumDiagonals.main - sumDiagonals.second > 0 ? sumDiagonals.main - sumDiagonals.second : -(sumDiagonals.main - sumDiagonals.second) ;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
