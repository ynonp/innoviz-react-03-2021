import { useState } from 'react';
import Game from './Game';
import Score from './Score';

export default function GamgePage(props) {
  const { exitGame } = props;
  const [ score, setScore ] = useState(0);

  function sucess() {
    setScore(s => s + 5);
  }

  function failure() {
    setScore(s => s - 2);
  }

  return (
    <div>
      <p>Game Page</p>
      <Score score={score} />
      
      <div style={{ margin: '10px' }}>
        <Game success={sucess} failure={failure} />
      </div>
      <button onClick={exitGame}>Exit</button>
    </div>
  );
}


