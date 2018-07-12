import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import Board from './Board.js';

class App extends Component {
  render() {
    return (
      <div className='contents'>
        <div className='header'>Tic Tac Toe</div>
        <Board className='board'/>
        <div className='footer'>All Rights Reserved</div>
      </div>
    );
  }
}

export default App;
