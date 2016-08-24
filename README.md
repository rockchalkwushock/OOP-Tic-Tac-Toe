# TicTacToe
OOP JS TicTacToe Game App.


What I need to make this work:
  1) A Player.
      a) must designate symbol 'X' or 'O'.
  2) A GameBoard.
      a) must represent all 9 squares.
      b) must be responsive to Players interaction.
      c) must start clear of all data.
  3) A way to move.
      a)
  4) A way to switch turns.
      a) must allow toggle between 'X' & 'O'.
  5) A way to check who's turn it is.
      a) must validate who is the current Player 'X' or 'O'.
  6) A way to check for a winner.
      a) must check after each turn if a winning combination has occurred.
      b) must alert Players of winner (& who won).
      b) must end game if winner found.
  7) A way to clear the board.
      a) must clear all data from all 9 cells in table.
  8) A way to check if square has been used already.
      a) must check the array of 9 indexes.
      b) must check if index chosen by Player has been used or not.
      c) must not allow index to be used if used prior to Player's selection.
      d) must alert user index is not a possible selection.
  9) A way to restart the game.
      a) must clear the board.
      b) must clear all messages.
      c) must clear any arrays storing data.
      d) must prompt user to play.

# Unresolved Issues (24AUG2016, CAB)

1) When game has ended (draw or win) does not display 'Play Again' button.
2) Instantly reloads board.
3) No prompt to user if draw or win displays as it should.
4) .winning-square is not obeying CSS when class is added to winner cells.
- When I put break points in gameEnd( ) & highlightWinner( )
- all the above work except .winning-square changing background-color.
