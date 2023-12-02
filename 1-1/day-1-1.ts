// RUN: npx tsx day-1-1.ts 

import fs from 'fs'
const inputData = fs.readFileSync('./1-1-data.txt', 'utf-8')

function isNumeric(value: string) {
    return /^-?\d+$/.test(value);
}

function sumOfCalibratedRows() {
    let totalSum = 0;
    let lineNumber = '';
    let allNumbersInOneLine: string[] = []
    for (let index = 0; index < inputData.length; index++) {
        if(inputData[index] == '\n') {
            if(allNumbersInOneLine){
                lineNumber = allNumbersInOneLine[0] + allNumbersInOneLine[allNumbersInOneLine.length - 1]
                totalSum += Number(lineNumber)
            }
            lineNumber = '';
            allNumbersInOneLine = []
            continue
        }

        if(isNumeric(inputData[index])){
            allNumbersInOneLine.push(inputData[index])
        }
    }
    console.log(totalSum)
}

sumOfCalibratedRows()