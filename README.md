# TicTacToe
Responsive TicTacToe Game App. Ennovar Class Project


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

# Unresolved Issues (19AUG2016, CAB)

1) checkForWinner( ) is not complete.
  - It is summing all selections not winning selections.
  - Unless first 3 selection by X or O are a winning combination game is broken.
  - Allows for more selections to be made after winner found.
2) reset( ) not implementing properly.
3) No form for inputing player's names.
4) Refreshing page is the only way to clear board and start again.
5) CSS still lacking in design.
  - table boarders are not cooperating.
  - table is responsive but widely varying across different viewports.
    * need to implement media queries to fix this.
