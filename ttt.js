
var squares = {
  blank: ' |',
  x: 'X',
  o: 'O'
};

var boardState = [];

function initBoard() {
  boardState = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
};

function startGame() {
  initBoard();
  renderBoard();

  return 'To make a move, enter the following:\nmarkSquare(<NUMBER>, <\'X\' or \'O\'>)\nwhere <NUMBER> is an integer from 1 to 9, and then either an \'X\' or an \'O\'.\nThe squares on the board are numbered such that square number 1 is in the upper-left hand corner. The top row is numbered 1, 2, and 3, the middle row is numbered 4, 5, and 6, and the bottom row is numbered 7, 8, and 9.';

};

function renderBoard() {
  let outputString = '\n';
  for(let i = 0; i < 9; i++) {
    outputString += '|' + boardState[i];
    if(i === 2 || i === 5 || i === 8) {
    outputString += '|\n';
    };
  };
  console.log(outputString);
  return '';
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
  
  function test(XorO) {
    if((boardState[0] === XorO && boardState[1] === XorO && boardState[2] === XorO) || 
       (boardState[3] === XorO && boardState[4] === XorO && boardState[5] === XorO) || 
       (boardState[6] === XorO && boardState[7] === XorO && boardState[8] === XorO) || 
       (boardState[0] === XorO && boardState[3] === XorO && boardState[6] === XorO) || 
       (boardState[1] === XorO && boardState[4] === XorO && boardState[7] === XorO) || 
       (boardState[2] === XorO && boardState[5] === XorO && boardState[8] === XorO) || 
       (boardState[0] === XorO && boardState[4] === XorO && boardState[8] === XorO) || 
       (boardState[2] === XorO && boardState[4] === XorO && boardState[6] === XorO)) {
        
        return true; 
    };
  };
  
  if(test('X')) { 
    initBoard();
    return 'X WINS!'; 
  };
  
  if(test('O')) {
    initBoard();
    return 'O WINS!';
  };
  
  return 'NO WINNER YET';
  
}