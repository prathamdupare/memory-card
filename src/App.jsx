// import { useState } from 'react';

import './App.css';
import Gameboard from './components/Gameboard';

function App() {
  return (
    <>
      <div className="header">
        <div className="game-heading">Memory Game</div>
        <div className="scoreboard">Scoreboard</div>
      </div>
      <div className="grid-container">
        <Gameboard />
      </div>
    </>
  );
}

export default App;
