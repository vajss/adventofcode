// RUN: node puzzle-2.js

import fs from 'fs';

const inputData = fs.readFileSync("./puzzle-3-data.txt", 'utf-8');

const validTokensArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let gaerMultipliers = {}


function checkIfpart(engineData, i, j){

  let gearsAround = []

  if('*' === engineData[i]?.[j-1]){
    gearsAround.push(i.toString() + '_' + (j-1).toString())
  }
  if('*' === engineData[i-1]?.[j-1]){
    gearsAround.push((i-1).toString() + '_' + (j-1).toString())
  }
  if('*' === engineData[i-1]?.[j]){
    gearsAround.push((i-1).toString() + '_' + (j).toString())
  }
  if('*' === engineData[i-1]?.[j+1]){
    gearsAround.push((i-1).toString() + '_' + (j+1).toString())
  }
  if('*' === engineData[i]?.[j+1]){
    gearsAround.push(i.toString() + '_' + (j+1).toString())
  }
  if('*' === engineData[i+1]?.[j+1]){
    gearsAround.push((i+1).toString() + '_' + (j+1).toString())
  }
  if('*' === engineData[i+1]?.[j]){
    gearsAround.push((i+1).toString() + '_' + j.toString())
  }
  if('*' === engineData[i+1]?.[j-1]){
    gearsAround.push((i+1).toString() + '_' + (j-1).toString())
  }

  return gearsAround;
}

function getSumOfAllParts() {

  const engineData = inputData.split(/\r?\n/);
  let numberString = '';
  let switchHappened = true;
  let totalSum = 0;
  let isValid = false;
  let gears = ''

  for (let i = 0; i < engineData.length; i++) {
    for (let j = 0; j < engineData[i].length; j++) {
      const element = engineData[i][j];

      if(validTokensArray.includes(element)){
        switchHappened = true;
        numberString += element;

        if(!isValid){
          gears = checkIfpart(engineData, i, j);
          if(gears){
            gears.forEach(gear =>{
              if(!gaerMultipliers[gear]){
                gaerMultipliers[gear] = []
              }
              isValid = true;
            })
          }
        }
        continue
      }

      if(switchHappened && gears){
        gears.forEach(gear => {
          gaerMultipliers[gear].push(Number(numberString))
        })
      }

      gears = []
      isValid = false;
      switchHappened = false;
      
      numberString = '';
    }
  }
  
  Object.keys(gaerMultipliers).forEach(gear => {
    if(gaerMultipliers[gear].length > 1){
      totalSum += gaerMultipliers[gear].reduce((a, b)=> a*b, 1)
    }
  })

  console.log(totalSum)
}


getSumOfAllParts();
