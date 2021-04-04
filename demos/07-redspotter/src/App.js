import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StartPage from './StartPage';
import GamePage from './GamePage';

// We'll write a game called Red Spotter
// You have 9 squares on the page, 1 is red, others are grey

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  function startGame() {
    setCurrentPage(1);
  }

  function exitGame() {
    setCurrentPage(0);
  }

  return (
    <div className="App">
      {currentPage === 0 ?
      <StartPage startGame={startGame} /> :
      <GamePage exitGame={exitGame} />
      }
    </div>
  );
}

export default App;
