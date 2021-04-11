import { useState, useEffect } from 'react';

function randomRedIndex() {
  return Math.floor(Math.random() * 9);
}

const squareStyle = {
  width: '70px',
  height: '70px',
  margin: '10px',
  display: 'inline-block',
  background: 'grey',
};

function winnerDiv(onClick) {
  return (
    <div
      style={{...squareStyle, background: 'red' }}
      onClick={onClick}
    />
  );
}

function loserDiv(onClick) {
  return (
    <div
      style={{...squareStyle }}
      onClick={onClick}
    />
  );
}



export default function Game(props) {
  const { score, success, failure } = props;
  const [ redIndex, setRedIndex ] = useState(
    randomRedIndex()
  );

  useEffect(function() {
    // HOW to start the effect
    const timer = setTimeout(() => {
      failure();
    }, 1000);

    return function cancel() {
      // HOW to cancel the effect
      clearTimeout(timer);
    }
  }, [ /* Dependencies */ score]);

  function handleClick(index) {
    if (index === redIndex) {
      success();
      setRedIndex(randomRedIndex());
    } else {
      failure();
    }
  }

  return (
    <div
      style={{
        width: '280px',
        margin: '0 auto'
      }}>
      {new Array(9).fill(0).map((_, i) => (
        i === redIndex ? 
        winnerDiv(() => handleClick(i)) : 
        loserDiv(() => handleClick(i))
      ))}
    </div>
  );
}








