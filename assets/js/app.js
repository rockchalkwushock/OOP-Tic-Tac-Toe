// ########################################
/*
*	Table of Contents
*	1)	Initialization of Variables
*	2)	Constructors
*	3)	Objects
* 4)  Parent Function
* 5)  Child Functions
*     a) initLoad( )
* 6)  Validation Check Functions
*     a) checkWhosTurn( )
*/

// ####################################################
/* ---------- Initialization of Variables ---------- */
// ####################################################


// #####################################
/* ---------- Constructors ---------- */
// #####################################

// ################################
/* ---------- Objects ---------- */
// ################################



// ########################################
/* ---------- Parent Function ---------- */
// ########################################

$(document).ready(initLoad);

// ##########################################
/* ---------- initLoad Function ---------- */
// ##########################################

function initLoad()
{
  console.log('page load');
  loadBoard();
  console.log('board ready');
  startGame();
}

// ###########################################
/* ---------- loadBoard Function ---------- */
// ###########################################

function loadBoard()
{
  for (var i = 1; i <= 9; i += 1)
  {
    emptyBoard(i);
  }
}

// ############################################
/* ---------- emptyBoard Function ---------- */
// ############################################

function emptyBoard(number)
{
  $('#s' + number).text('');
}

// ###########################################
/* ---------- startGame Function ---------- */
// ###########################################

function startGame()
{
  console.log('in start game');
  nextMove();
}

// ###############################################
/* ---------- checkWhosTurn Function ---------- */
// ###############################################

function checkWhosTurn()
{

}

// ############################################
/* ---------- switchTurn Function ---------- */
// ############################################

function switchTurn()
{

}

// ################################################
/* ---------- checkForWinner Function ---------- */
// ################################################

function checkForWinner()
{

}

// ################################################
/* ---------- nextMove Function ---------- */
// ################################################

function nextMove(square)
{
  console.log('in next move');
  square=$('.cell');                                 // Take the html element 'square' & make it a jQuery element.
  console.log('square defined');
  square.click(function()
  {
    console.log('in click event');
    var position = square.attr('data-position');    // Variable stores what data-position has been selected.
    console.log('position defined');
  });
}

// ##########################################
/* ---------- checkRow Function ---------- */
// ##########################################

function checkRow(a, b, c, move)
{

}

// ########################################
/* ---------- getBox Function ---------- */
// ########################################

function getBox(number)
{

}
