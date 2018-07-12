import { X, O } from './constants';
export const buildEmptyBoard = function() { return [[null,null,null], [null,null,null], [null,null,null]] };

export const checkWinner = function(board) {
  console.log(checkRows(board));
  return checkRows(board) || checkColumns(board) || checkDiagonals(board);
}

function checkRows(board) {
  let winner = null;
  board.forEach(function(row) {
    if (row.every(function(v) { return v === X; })) {
      winner = X;
    } else if (row.every(function(v) { return v === O; })) {
      winner = O;
    }
  });
  return winner;
}

function checkColumns(board) {
  let winner = null;
  for(let i = 0; i < board.length; i++) {
    if (board.every(function(row) { return row[i] === X; })) {
      winner = X;
    } else if (board.every(function(row) { return row[i] === O; })) {
      winner = O;
    }
  }
  return winner;
}

function checkDiagonals(board) {
  let winner = null;
  const isBackDiag = board[0][0] === board[1][1] && board[1][1] === board[2][2];
  const isForwardDiag = board[2][0] === board[1][1] && board[1][1] === board[0][2];
  if ((board[1][1] !== null) && (isForwardDiag || isBackDiag)) {
    winner = board[1][1];
  }
  return winner;
}
