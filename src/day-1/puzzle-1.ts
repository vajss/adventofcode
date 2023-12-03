// RUN: npx tsx day-1-1.ts 

import fs from 'fs';

const inputData = fs.readFileSync("./puzzle-1-data.txt", 'utf-8');

function isNumeric(value: string) {
    return /^-?\d+$/.test(value);
}

function sumOfCalibratedRows() {
    let totalSum = 0;
    let lineNumber = '';
    let allNumbersInOneLine: string[] = []
    for (const element of inputData) {
        if(element === '\n') {
            if(allNumbersInOneLine){
                lineNumber = allNumbersInOneLine[0] + allNumbersInOneLine[allNumbersInOneLine.length - 1]
                totalSum += Number(lineNumber)
            }
            lineNumber = '';
            allNumbersInOneLine = []
            continue
        }

        if(isNumeric(element)){
            allNumbersInOneLine.push(element)
        }
    }
    console.log(totalSum)
}

sumOfCalibratedRows()