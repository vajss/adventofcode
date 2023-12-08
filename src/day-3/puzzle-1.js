// RUN: node puzzle-1.js

import fs from 'fs';

const inputData = fs.readFileSync("./puzzle-3-data.txt", 'utf-8');

const validTokensArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function checkIfpart(engineData, i, j){

  if(![...validTokensArray, '.', undefined].includes(engineData[i]?.[j-1])){
    return true;
  }
  if(![...validTokensArray, '.', undefined].includes(engineData[i-1]?.[j-1])){
    return true;
  }
  if(![...validTokensArray, '.', undefined].includes(engineData[i-1]?.[j])){
    return true;
  }
  if(![...validTokensArray, '.', undefined].includes(engineData[i-1]?.[j+1])){
    return true;
  }
  if(![...validTokensArray, '.', undefined].includes(engineData[i]?.[j+1])){
    return true;
  }
  if(![...validTokensArray, '.', undefined].includes(engineData[i+1]?.[j+1])){
    return true;
  }
  if(![...validTokensArray, '.', undefined].includes(engineData[i+1]?.[j])){
    return true;
  }
  if(![...validTokensArray, '.', undefined].includes(engineData[i+1]?.[j-1])){
    return true;
  }
  return false
}

function getSumOfAllParts() {

  const engineData = inputData.split(/\r?\n/);
  let numberString = '';
  let validList = [];
  let switchHappened = true;
  let totalSum = 0;

  for (let i = 0; i < engineData.length; i++) {
    for (let j = 0; j < engineData[i].length; j++) {
      const element = engineData[i][j];

      if(validTokensArray.includes(element)){
        switchHappened = true;

        numberString += element;
        const isValid = checkIfpart(engineData, i, j);
        validList.push(isValid)
        continue
      }

      if(switchHappened && validList.some(item => item)){
        totalSum += Number(numberString);
      }

      switchHappened = false;
      validList = []
      numberString = '';
    }
  }
  
  console.log(totalSum)
}


getSumOfAllParts();
