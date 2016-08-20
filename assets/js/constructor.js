
// Our Array of Objects that makes our Game Board.
// It stores objects: id's & value. (possibly more later)
var Board =
[
  // Data-Position 0
  {
    id: 'square-1',
    text: '',
    value: 1, // 2^0
  },
  // Data-Position 1
  {
    id: 'square-2',
    text: '',
    value: 2,
  },
  // Data-Position 2
  {
    id: 'square-3',
    text: '',
    value: 4,
  },
  // Data-Position 3
  {
    id: 'square-4',
    text: '',
    value: 8,
  },
  // Data-Position 4
  {
    id: 'square-5',
    text: '',
    value: 16,
  },
  // Data-Position 5
  {
    id: 'square-6',
    text: '',
    value: 32,
  },
  // Data-Position 6
  {
    id: 'square-7',
    text: '',
    value: 64,
  },
  // Data-Position 7
  {
    id: 'square-8',
    text: '',
    value: 128,
  },
  // Data-Position 8
  {
    id: 'square-9',
    text: '',
    value: 256,
  },
]

// My Constructor
// this.game will point to our array of objects Board.
var TicTacToe = function(playerOne, playerTwo, board)
{
  this.board = board;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.turn = 0;
  this.rounds = { 'X': [] , 'O': [] };
};

TicTacToe.prototype.reset = function()
{
  this.turn = 0;
  this.rounds = { 'X': [] , 'O': [] };
};

TicTacToe.prototype.buildBoard = function()
{
  for(var i = 0; i <= 8; i++)  // iterate through all objects stored in Board[ ] and set squares to empty
  {
    $('.cell[data-position="' + i + '"]').text(this.board[i].text);
  }
};

TicTacToe.prototype.nextMove = function(square)
{
  square=$(square);                                 // Take the html element 'square' & make it a jQuery element.
  if (square.text() == "")                          // if 'square' is empty....
  {
    var position = square.attr('data-position');    // Variable stores what data-position has been selected.
    var value = this.board[position].value;         // Variable accesses Board[index] --> index.value: key (i.e. Board[0].value:1)
    //even - playerOne
    if(this.turn % 2 == 0)
    {
      this.rounds['X'].push(value);                 // .push( ) store whatever the value of this square's this.board[position].value is to the corresponding array.
      square.text("X");                             // Mark the square with 'X' (do this as text so the initial if statement will catch it as not empty; user will not be able to use that square then.)
    }
    else
    {
      //odd - playerTwo
      this.rounds['O'].push(value);                 // .push( ) store whatever the value of this square's this.board[position].value is to the corresponding array.
      square.text("O");                             // Mark the square with 'O' (do this as text so the initial if statement will catch it as not empty; user will not be able to use that square then.)
    }
    this.checkForWinner();
    this.turn++;
  }
  else
  {
    alert('Space already chosen');
  }
};

TicTacToe.prototype.checkForWinner = function()
{
  var symbol;                                       // Variable will store what symbol is being analyzed.
  if(this.turn % 2 == 0) symbol = 'X';
  else symbol ='O';

  var sum = this.rounds[symbol].reduce(             // this.rounds[symbol] represents either X: [selections] or O: [selections].
             function(sum, current){                // .reduce( ) will take the values stored in our array and through function(sum, current) sum the total indexes.
               return sum + current;
             }, 0                                   // STOP
           );
  var arrayWinners = [7, 56, 448, 73, 146, 292, 273, 84]; // Array represents the winning sums of the square values. (only these values are winners).
  console.log(sum, this.rounds, symbol);

  if (arrayWinners.includes(sum))                   // .includes( ) will scan array indexes for an index that is === sum.
  {
      console.log("you are the winner");
      alert('You are the winner!')
      this.newGame();
      return true;
  }
  return false;
};
