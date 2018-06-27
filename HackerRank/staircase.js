'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    let arr = new Array(n);
    arr.fill(' ');
    for(var i=n;i>0;i--){
         arr[i] = '#';
         console.log(arr.join('').substring(1));
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
