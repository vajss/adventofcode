// RUN: ts-node-esm puzzle-2

import fs from 'fs';

const inputData = fs.readFileSync("./puzzle-1-data.txt", 'utf-8');

const validTokensMap = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9'
}

function sumOfCalibratedRows() {
    let totalSum = 0;
    let currentLineCharacters = []
    for (let index = 0; index < inputData.length; index++) {
        if(inputData[index] === '\n') {
          let currentLineString = currentLineCharacters.join("")
          let lineNumber = '';
          let currentValidTokens = [];
          let indexRecord = [];

          Object.keys(validTokensMap).forEach((key) => {
            const regex = new RegExp(key, 'g');
            let result, allOccurances = [];
            while ( (result = regex.exec(currentLineString)) ) {
                allOccurances.push(result.index);
            }
            allOccurances.forEach((element) => {
              
            const entery = {
              key: validTokensMap[key],
              value: element
            }

            indexRecord.push(entery);
          });

          })
          indexRecord.sort((firstItem, secondItem) => firstItem.value - secondItem.value);
          indexRecord.forEach(item => {
            currentValidTokens.push(item.key)
          })

          lineNumber = currentValidTokens[0] + currentValidTokens[currentValidTokens.length - 1];
          totalSum += Number(lineNumber);

          currentLineCharacters = [];
          continue;
        }

        currentLineCharacters.push(inputData[index]);

    }
    console.log(totalSum);
}

sumOfCalibratedRows()
