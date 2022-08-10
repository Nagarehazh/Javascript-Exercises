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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // HERE IS THE ANSWER 
  
    let positive = arr.filter(function(numero){
        return numero > 0;
    });
    
    let negative = arr.filter(numero => numero < 0);
    
    let nZero = arr.filter(numero => numero === 0);
    
    
    console.log(positive.length/arr.length);
    console.log(negative.length/arr.length);
    console.log(nZero.length/arr.length);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}