
var squares = {
  blank: ' |',
  x: 'X',
  o: 'O'
};

var boardState = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];

function startGame() {
  boardState = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];

  renderBoard();

  return 'To make a move, enter the following:\nmarkSquare(<NUMBER>, <\'X\' or \'O\'>)\nwhere <NUMBER> is an integer from 1 to 9, and then either an \'X\' or an \'O\'.';

};

function renderBoard() {
  let outputString = '\n';
  for(let i = 0; i < 9; i++) {
    outputString += '|' + boardState[i];
    if(i === 2 || i === 5 || i === 8) {
    outputString += '|\n';
    };
  };
  return outputString;
};

function markSquare(squareNumber, XorO) {
  if(!(XorO === 'X' || XorO === 'O')) {
    return 'BAD INPUT. USE X OR O, ONLY';
  };

  boardState[squareNumber-1] = XorO;
  console.log('You placed an ' + XorO + ' at square number ' + squareNumber + '\n' + renderBoard());
  return reportGameState();
};

function reportGameState() {
  // TBD
  return 'YOU ARE NOT YET THE WINNER';
  
}