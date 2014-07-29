describe("game of life app.js", function() {
  it('should kill a cell with <2 neighbors', function() {
    var initialBoard = 
      [[1,0,0], 
      [0,0,0], 
      [0,0,0]];
    var nextBoard = 
      [[0,0,0], 
      [0,0,0], 
      [0,0,0]];
    var game = new Game(initialBoard);
    game.playRound();
    expect(game.board).toEqual(nextBoard);
  });

})
  
