'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // HERE IS MY ANSWER
    let sum = 0;
    let arrSum = [];
    let min;
    let max;
    for(let i = 0; i < arr.length; i++){
       sum = arr.reduce((acc, crr) => acc + crr, 0);
       arrSum[i] = sum - arr[i];
        }
        min = Math.min(...arrSum);
        max = Math.max(...arrSum);
    console.log(min, max);
    }



function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
