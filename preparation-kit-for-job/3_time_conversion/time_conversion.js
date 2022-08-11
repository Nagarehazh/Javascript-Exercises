'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let newS = s.slice(2, -2);  //s string is saved in newS as a ":00:00" withou hour an PM/AM
    let hour = s.slice(0, 2) * 1;  //Save the first two letters as hours converted to a number
    if(hour === 12 && s.includes("AM")){    //12:00:00PM? so slice an return without PM and hour 00
        hour = 0;
        return "0"+ hour + newS;
    }
    
    if(hour === 12 && s.includes("PM")){    //12:00:00AM? so slice an return without AM
        newS = s.slice(0, -2);
        return newS;
    }
    
    if(hour < 12 && s.includes("PM")){  //hour from 1 to 11 PM. Ex: 2 PM? so 2 + 12 = 14. Return 14 + ":00:00"
        hour = hour + 12;
        return hour + newS;
    }else if(hour < 10 && s.includes("AM")){    //hour < 10 ? so add zero to start 
        return "0" + hour + newS;
    }else{  //10 or 11 AM? so write like that plus :00:00
       return hour + newS; 
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

