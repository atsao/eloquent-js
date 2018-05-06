/*
Write a program that creates a string that represents an 8x8 grid, usaing new-line characters to separate lines. At each position, there is either a space or `#` character.
 */

function generateChessBoard(n) {
  let board = '';

  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      if ((x % 2 === 0 && y % 2 !== 0) || (x % 2 !== 0 && y % 2 === 0)) {
        board += ' ';
      } else {
        board += '#';
      }
    }

    board += '\n';
  }

  return board;
}
