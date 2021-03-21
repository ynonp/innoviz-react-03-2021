import React, { useState } from 'react';

export default function NumberGuess(props) {
  const [ secretNumber, _setSecretNumber ] = useState(Math.floor(Math.random() * 100));
  const [ showResult, setShowResult ] = useState(false);
  const [ guess, setGuess ] = useState('');

  function handleChange(ev) {
    setShowResult(false);
    setGuess(ev.target.value);
  }

  function tryIt() {
    setShowResult(true);
  }

  return (
    <div>
      <label>
        Type your guess...
        <input type="text" value={guess} onChange={handleChange} />
        <button onClick={tryIt}>Try!</button>
      </label>
      {showResult &&
        <CompareResult
          secretNumber={secretNumber}
          guess={guess}
        />
      }
    </div>
  );
}


function CompareResult(props) {
  const { secretNumber, guess } = props;
  if (secretNumber > guess) {
    return <p>Sorry, too small</p>
  } else if (secretNumber < guess) {
    return <p>Sorry, too big</p>
  } else {
    return <p>Bravo! You found it</p>
  }
}

