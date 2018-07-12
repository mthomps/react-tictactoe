import React, { Component } from 'react';
import * as gameLogic from '../GameLogic';
import { X, O } from '../constants';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: gameLogic.buildEmptyBoard()
    }
    this.boxClicked = this.boxClicked.bind(this);
  }

  boxClicked(targetX, targetY) {
    if (this.state.board[targetY][targetX] !== null) {
      return;
    }

    const newBoard = this.state.board.map(function(row, y) {
      return row.map(function(v, x) {
        if (x === targetX && y === targetY) {
          return X;
        } else {
          return v;
        }
      });
    });
    const newState = {...this.state, board: newBoard};
    this.setState(newState);
    this.checkForWinner(newBoard);
  }

  checkForWinner(board) {
    console.log("winner? " + gameLogic.checkWinner(board));
  }

  boxesHtml() {
    const board = this.state.board
    return board.map((row, y) => {
      return row.map((v, x) => {
        const key = `box-${x}-${y}`;
        const className = `box`;
        return <div key={key} className={className} onClick={() => this.boxClicked(x, y)}>{board[y][x]}</div>
      });
    });
  }

  render() {
    return (
      <div className='board'>
        {this.boxesHtml()}
      </div>);
  }
}

export default Board;
