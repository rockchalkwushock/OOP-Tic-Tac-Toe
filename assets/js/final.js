// ########################################
/*
*	Table of Contents
*	  1)	Initialization of Variables
*	  2)	Constructor
*       a) TicTacToe(playerOne, playerTwo, board)
*	  3)	Prototypes
*       a) buildBoard( )
*       b) nextMove( )
*       c) checkForWinner( )
*   4)  Instances
*       a) myGame
*   5)  Parent Function
*   6)  Child Functions
*       a) initLoad( )
*   7)  Validation Check Functions
*       a) checkWhosTurn( )
*/
// ########################################

// ####################################################
/* ---------- Initialization of Variables ---------- */
// ####################################################

var myGame; // This will become an instance of^^^^^^^^^^^^^^^^
var Board = // Array holds 9 objects representing the 9 squares on the board.
[
  // Every Objects holds 3 key-value pairs.
  // .text is set to the initial state of the board for a new game.
  // .value represents a specific value for each object that will be used to find the winner.
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
];

// #####################################
/* ---------- Constructor ---------- */
// #####################################

/* This Constructor will build the board, take in the players,
track the number of turns, and store the values chosen by each player
in separate arrays. */

var TicTacToe = function(playerOne, playerTwo, board)
{
  this.board = board;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.turn = 0;
  this.rounds = { 'X': [] , 'O': [] };
};

// ###################################
/* ---------- Prototypes ---------- */
// ###################################

/* ---------- a) buildBoard ---------- */

TicTacToe.prototype.buildBoard = function()
{
  for(var i = 0; i <= 8; i++)  // iterate through all objects stored in Board[ ].
  {
    // look for the class .cell[data-position] and iterate through all of them.
    // For each iteration set the text of the cell equal to Board[i];
    // where i represents an object stored as an index in Board[i].
    // .text is a key-value pair in each object stored in Board[ ].
    // So iterate to each .cell[data-position] & change it's text value to that
    // of the object
    $('.cell[data-position="' + i + '"]').text(this.board[i].text).click(function()
    {
      myGame.nextMove($(this));
    });
  }
};

/* ---------- b) nextMove ---------- */

TicTacToe.prototype.nextMove = function(square)
{

  if (square.text() === '')                          // if 'square' is empty....
  {
    var position = square.attr('data-position');    // Variable stores what data-position has been selected.
    var value = this.board[position].value;         // Variable accesses Board[index] --> index.value: key (i.e. Board[0].value:1)
    //even - playerOne
    if(this.turn % 2 === 0)
    {
      this.rounds.X.push(value);                 // .push( ) store whatever the value of this square's this.board[position].value is to the corresponding array.
      square.text("X");                             // Mark the square with 'X' (do this as text so the initial if statement will catch it as not empty; user will not be able to use that square then.)
    }else
    {
      //odd - playerTwo
      this.rounds.O.push(value);                 // .push( ) store whatever the value of this square's this.board[position].value is to the corresponding array.
      square.text("O");                             // Mark the square with 'O' (do this as text so the initial if statement will catch it as not empty; user will not be able to use that square then.)
    }
    this.checkForWinner();
    this.turn++;
  }else{
    alert('Space already chosen');
  }
};

/* ---------- c) checkForWinner ---------- */

TicTacToe.prototype.checkForWinner = function()
{
  var symbol;                                       // Variable will store what symbol is being analyzed.
  if(this.turn % 2 === 0) symbol = 'X';
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
      alert('You are the winner!');
      this.newGame();
      return true;
  }
  return false;
};

/* ---------- d) reset ---------- */

TicTacToe.prototype.reset = function()
{
  this.turn = 0;
  this.rounds = { 'X': [] , 'O': [] };
};

// ##################################
/* ---------- Instances ---------- */
// ##################################

/* ---------- a) myGame ---------- */

// myGame is an instance of
myGame = new TicTacToe('Player X',"Player O",Board);

// ########################################
/* ---------- Parent Function ---------- */
// ########################################

$(document).ready(initLoad);

// #######################################
/* ---------- Child Function ---------- */
// #######################################

/* ---------- a) initLoad Function ---------- */

function initLoad()
{
  console.log('page load');
  myGame.buildBoard();
  myGame.reset();
}
