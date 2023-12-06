
// RUN: npx tsx day-1-1.ts 

import fs from 'fs';

const inputData = fs.readFileSync("./puzzle-2-data.txt", 'utf-8');

function getOneTrysSum(oneHand: string[]) {

  let oneHandSum: any = {
    'green': 0,
    'red': 0,
    'blue': 0
  }

  for (let index = 0; index < oneHand.length; index = index + 2) {
    oneHandSum[oneHand[index+1]] = oneHand[index]
  }

  return oneHandSum;
}

function checkRow(row: string[]) {
  let isValid = true;
  for (let index = 0; index < row.length; index++) {
    const element = row[index];

    let byColor = element.split(/[, ]+/)
    byColor.shift()

    const sumObject = getOneTrysSum(byColor);

    if(sumObject['red'] > 12 || sumObject['green'] > 13 || sumObject['blue'] > 14) {
      isValid = false;
      break;
    }
  }
  return isValid
}

function getPossibleGamesCount() {
  const gamesData = inputData.split(/\r?\n/);

  let totalSumOfIds = 0;
  for (let index = 0; index < gamesData.length; index++) {
    let element = null;
    if(index < 9){
      element = gamesData[index].slice(7)
    } else if(index < 99) {
      element = gamesData[index].slice(8)
    } else {
      element = gamesData[index].slice(9)
    }
    
    let allBalls = element.slice().split(';');
    totalSumOfIds += checkRow(allBalls) ? index + 1 : 0

  }
  console.log(totalSumOfIds)
  
}

getPossibleGamesCount();
