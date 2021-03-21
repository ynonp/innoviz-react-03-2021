import React from 'react';

export default function Counter() {
  const [value, setValue] = React.useState(0);

  function inc(diff) {
    setValue(v => v + diff);
  }

  return (
    <div>
      <button onClick={() => inc(1)}>+</button>
      Value is now: {value}
      <button onClick={() => inc(-1)}>-</button>
    </div>
  );
}

