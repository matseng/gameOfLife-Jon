describe("game of life app.js", function() {
  
  it('should count neighbors', function() {
    var initialBoard = 
      [[1,0,0], 
       [0,1,0], 
       [0,0,1]];
    var game = new Game(initialBoard);
    expect(game.countLiveNeighbors(0, 0)).toBe(1);
    expect(game.countLiveNeighbors(0, 1)).toBe(2);
    expect(game.countLiveNeighbors(1, 1)).toBe(2);
    expect(game.countLiveNeighbors(2, 2)).toBe(1);
    expect(game.countLiveNeighbors(2, 0)).toBe(1);
  });

  it('should kill a live cell with <2 neighbors', function() {
    var initialBoard = 
      [[1,0,0], 
       [0,1,0], 
       [0,0,1]];
    var nextBoard = 
      [[0,0,0], 
       [0,1,0], 
       [0,0,0]];
    var game = new Game(initialBoard);
    game.playRound();
    expect(game.board).toEqual(nextBoard);
  });

})
  
