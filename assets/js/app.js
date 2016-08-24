// ########################################
/*
*	Table of Contents
*	  1)	Initialization of Variables
*	  2)	Constructor
*       a) TicTacToe(playerOne, playerTwo, board)
*	  3)	Prototypes
*       a) gameRun( )
*       b) validateMove( )
*       c) move( )
*       d) validateWinner( )
*       e) gameEnd( )
*       f) switchPlayer( )
*       g) displayMessage( )
*       h) validateThreeInARow( )
*       i) highlightWinner( )
*   4)  Instances
*       a) myGame
*   5)  Parent Function
*   6)  Child Functions
*       a) initLoad( )
*/
// ########################################

// ####################################################
/* ---------- Initialization of Variables ---------- */
// ####################################################

var $cell = $('.cell');
var BLANK = '';
var board = [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK];

// ####################################
/* ---------- Constructor ---------- */
// ####################################

function TicTacToe(playerOne, playerTwo, board)
{
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.board = board;
  this.turn = 0;
  this.currentPlayer = playerOne;
}

// ###################################
/* ---------- Prototypes ---------- */
// ###################################

/* ---------- a) gameRun ---------- */
TicTacToe.prototype.gameRun = function($cell)
{
  var index = $cell.attr('id');

  if (this.validateMove(index))
  {
    this.move($cell, index);
    var winningLine = this.validateWinner();

    (winningLine) ? this.gameEnd(winningLine) : this.switchPlayer();
  }
};

/* ---------- b) validateMove ---------- */
TicTacToe.prototype.validateMove = function(index)
{
  if (board[index] === BLANK)
  {
    return true;
  }
  else
  {
    this.displayMessage('That space is already used. Please select another square.');
    return false;
  }
};

/* ---------- c) move ---------- */
TicTacToe.prototype.move = function($cell, index)
{
  board[index] = this.currentPlayer;
  $cell.html(this.currentPlayer);
  this.turn++;
};

/* ---------- d) validateWinner ---------- */
TicTacToe.prototype.validateWinner = function()
{
  var winningCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
                        [0, 3, 6], [1, 4, 7], [2, 5, 8],
                        [0, 4, 8], [2, 4, 6] ],
                      winIndex = -1;

  $.each(winningCombos, function(index, winningCombo)
  {
    if (myGame.validateThreeInARow(winningCombo))
    {
        winIndex = index;
        return false;
    }
  });

  if (winIndex !== -1)
  {
    return winningCombos[winIndex];
  }
  else if (this.turn === 9)
  {
    return true; // Draw.
  }
  else
  {
    return false;
  }
};

/* ---------- e) gameEnd ---------- */
TicTacToe.prototype.gameEnd = function(endFormation)
{
  var endMessage;

  if ($.isArray(endFormation))
  {
    endMessage = 'Game Over. Player ' + this.currentPlayer + ' Wins!';
    this.highlightWinner(endFormation);
  }
  else
  {
    endMessage = 'Game Over, Draw.';
  }

  $('.msg-center').addClass('end-message');
  this.displayMessage(endMessage);

  $('.table').off('click');
  $('.play-again').show().click(location.reload());
};

/* ---------- f) switchPlayer ---------- */
TicTacToe.prototype.switchPlayer = function()
{
  this.currentPlayer = (this.currentPlayer === this.playerOne) ? this.playerTwo : this.playerOne;
  this.displayMessage('Current Player: ' + this.currentPlayer);
};

/* ---------- g) displayMessage ---------- */
TicTacToe.prototype.displayMessage = function(message)
{
  $('.msg-center').html(message);
};

/* ---------- h) validateThreeInARow ---------- */
TicTacToe.prototype.validateThreeInARow = function(index)
{
  return (board[index[0]] === board[index[1]]) &&
         (board[index[0]] === board[index[2]]) &&
         (board[index[0]] !== BLANK);
};

/* ---------- i) highlightWinner ---------- */
TicTacToe.prototype.highlightWinner = function(line)
{
  $.each(line, function(index, winPosition)
  {
    $cell.eq(winPosition).addClass('.winning-square');
  });
};

// ##################################
/* ---------- Instances ---------- */
// ##################################

myGame = new TicTacToe('X', 'O', board);

// ########################################
/* ---------- Parent Function ---------- */
// ########################################

$(document).ready(initLoad);

// ########################################
/* ---------- Child Functions ---------- */
// ########################################

function initLoad()
{
  $('.cell').click( function()
  {
    myGame.gameRun($(this));
  });
}
