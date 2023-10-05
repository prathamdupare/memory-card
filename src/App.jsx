// import { useState } from 'react';

import './App.css';
import Gameboard from './components/Gameboard';

function App() {
  return (
    <>
      <div className="header">
        <div>Memory Game</div>
        <div>Scoreboard</div>
      </div>
      <div className="grid-container">
        <Gameboard />
      </div>
    </>
  );
}

export default App;
