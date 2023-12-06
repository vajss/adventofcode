
// RUN: npx tsx day-1-1.ts 

import fs from 'fs';

const inputData = fs.readFileSync("./puzzle-2-data.txt", 'utf-8');

function getMinimumPerHand(oneHand) {

  let oneHandSum = {
    'green': 0,
    'red': 0,
    'blue': 0
  }

  for (let index = 0; index < oneHand.length; index = index + 2) {
    oneHandSum[oneHand[index+1]] = oneHand[index]
  }

  return oneHandSum;
}

function getMinPerRow(row) {

  let currentMin = {
    'green': 0,
    'red': 0,
    'blue': 0
  }

  for (let index = 0; index < row.length; index++) {
    const element = row[index];

    let byColor = element.split(/[, ]+/)
    byColor.shift()

    const sumObject = getMinimumPerHand(byColor);

    console.log('sumObject: ', sumObject)

    if(sumObject['red'] > Number(currentMin['red'])){ // mora se sabrati sve 
      currentMin['red'] = sumObject['red'];
    }

    if(sumObject['green'] > Number(currentMin['green'])){
      currentMin['green'] = sumObject['green'];
    }

    if(sumObject['blue'] > Number(currentMin['blue'])){
      currentMin['blue'] = sumObject['blue'];
    }
  }


  return currentMin;
}

function getPower(rowMin){
  // console.log(rowMin)
  return Number(rowMin['red']) * Number(rowMin['green']) * Number(rowMin['blue'])
}

function getSumOfMinimalPowers() {
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
    
    let allCubes = element.slice().split(';');
    
    let minPerRow = getMinPerRow(allCubes);
    console.log(minPerRow)
console.log('power: ', getPower(minPerRow))
    totalSumOfIds += getPower(minPerRow)

  }
  console.log(totalSumOfIds)
  
}

getSumOfMinimalPowers();
