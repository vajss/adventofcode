import fs from 'fs';

const inputData = fs.readFileSync("./puzzle-4-data.txt", 'utf-8');


function getAllWiningsSum() {
  const allSchCards = inputData.split(/\r?\n/);
  let sumOfWinings = 0;

  for (let index = 0; index < allSchCards.length; index++) {
    let element = allSchCards[index];
    element = element.split(':')[1]

    const [leftPart, rightPart] = element.split('|').map(part => part.trim());
    const winningNumbers = leftPart.split(/\s+/).map(Number);
    const myNumbers = rightPart.split(/\s+/).map(Number);

    sumOfWinings += getWinningsInOneLine(winningNumbers, myNumbers)
  }
  console.log(sumOfWinings)
}


function getWinningsInOneLine(winningNumbers, myNumbers) {
  let winOfLine = 0
  for (let index = 0; index < myNumbers.length; index++) {
    const element = myNumbers[index];
    if(winningNumbers.includes(element)){
      if(winOfLine) {
        winOfLine *= 2;
      }
      else {
        winOfLine = 1
      }
    }
  }
  return winOfLine
}

getAllWiningsSum()