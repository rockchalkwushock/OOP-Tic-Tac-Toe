
// My player will be an Object that I can assign a name and symbol.
playerOne = { name: 'Wonder Woman', symbol: 'X' };

// Constructor Player will take in a name and symbol creating a new object from my object Player.
var Player = function(name, symbol)
{
  this.name   = name;
  this.symbol = symbol;
}

var playerOne = new Player('John', 'X');
var playerTwo = new Player('Jane', 'O');

// Constructor Game will take in 2 Players.
// Assign the currentPlayer as playerOne (John, 'X').
// Yield a new 'empty' board to the html.
var Game = function(playerOne, playerTwo)
{
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.board = new Board();
  this.currentPlayer = playerOne;
};

// Constructor Board will take in an array.
// From this array it will create the new 'empty' board.
var Board = function(array)
{
  this.array = array;


  // this.spaces = [];
  // for(var x = 0; x < 3; x++)
  // {
  //   for(var y = 0; y < 3; y++)
  //   {
  //     this.spaces.push(new Space(x, y));
  //   }
  // }
};

var Space = function(xCoord, yCoord)
{
this.xCoord = xCoord;
this.yCoord = yCoord;
};

Game.prototype.switchPlayer = function()
{
   if(this.turn === 2) // if this.turn is 2...
   {
     this.turn = 1; // then make this.turn become 1.
     this.currentPlayer = this.playerOne; // change this.currentPlayer to this.playerOne
     return this.playerTwo;
   }
   else // if this.turn is not 2
   {
     this.turn = 2; // then make this.turn become 2.
     this.currentPlayer = this.playerTwo; // change this.currentPlayer to this.playerTwo.
     return this.playerOne;
   }
};

Space.prototype.markSpace = function(player)
{
   if( !this.marked )
   {
     this.marked = player;
     return true;
   }
};

Board.prototype.winner = function(player)
{
   var coords = [];
   this.spaces.map(function(space)
   {
     if(space.marked === player)
     {
        coords.push({x: space.xCoord, y: space.yCoord});
     }
   });
   if(checkThree(coords)) return true;
   if(checkDiagonal(coords)) return true;
};

var checkThree = function(coords)
{
// winning game logic here!
};

var checkDiagonal = function(coords)
{
// more winning game logic here! or you can combine the two into one function
};
