// app.js

// 1 1 0 
// 0 1 0
// 1 0 1

// 1 0 0
// 0 0 0
// 0 0 0 
  -->
// 0 0 0
// 0 0 0
// 0 0 0 


// - Live cell with <2 live neigh dies
// - Live cell with 2 or 3 live neigh lives
// - Live cell with >3 live neight dies
// - A dead cell with exactly 3 lives neigh become live

// - iterate over all cells
// - check each cell for rules above
//   - check for inbounds
//   - count live neighbors
//   - state of current current cell
//   - don't mutate initial board, return a new board
//   - board array or arrays

function Game(input) {
  this.board = input;
};

Game.prototype.playRound = function() {
  var numOfNeighbors = 0;
  // var newBoard = this.board.slice();
  var newBoard = JSON.parse(JSON.stringify(this.board));
  var that = this;
  this.forEach(function(i, j) {
    var numOfNeighbors = this.countLiveNeighbors(i, j);
    console.log(i, j, this.board[i][j], numOfNeighbors);
    if(this.board[i][j] === 1 && numOfNeighbors < 2) {
      newBoard[i][j] = 0;
    }
  }.bind(this));

  this.board = newBoard;
};

Game.prototype.forEach = function(callback) {
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      callback(i, j);
    }
  }
};

Game.prototype.countLiveNeighbors = function(row, col) {
  var count = 0;
  var rowStart = row - 1;
  var rowEnd = row + 1;
  var colStart = col - 1;
  var colEnd = col + 1;
  for(var i = rowStart; i <= rowEnd; i++) {
    for(var j = colStart; j <= colEnd; j++) {
      try {
        if(!(i === row && j === col) && this.board[i][j] === 1) {
          count++;
        }
      } catch (e) {
        // console.log("Skip array out of bounds error: ", e);
      }
    }
  }
  return count;
  //var x = count++  //x = count
  //var x = ++count  //x = 1 + count, typically what we want!
}
