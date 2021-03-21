import React, { useState } from 'react';

function Counter(props) {
  const { onChange } = props;
  const [value, setValue] = useState(0);

  function inc() {
    setValue(v => v + 1);
    onChange(1);
  }

  return (
    <p>
      value {value};
      <button onClick={inc}>+</button>
    </p> 
  );
}

export default function Demo(props) {
  const [sum, setSum] = useState(0);
  const countersCount = 4;

  return (
    <div>
      <p>The total sum value of all counters is: {sum} </p>
      {new Array(countersCount).fill(0).map((v, i) => (
        <Counter onChange={(val) => setSum(s => s + val)} />
      ))}
    </div>
  );
}

