import React from 'react';

export default function TimeConverter(props) {
  const [value, setValue] = React.useState(0);

  function handleChange(factor) {
    return function(ev) {
      setValue(Number(ev.target.value) * factor);
    }
  }

  return (
    <div>
      <label>
        Hours
        <input
          type="number"
          value={value / 3600}
          onChange={handleChange(3600)}
        />
      </label>
      <label>
        Minutes
        <input
          type="number"
          value={value / 60}
          onChange={handleChange(60)}
        />
      </label>
      <label>
        Seconds
        <input
          type="number"
          value={value}
          onChange={handleChange(1)}
        />
      </label>
    </div>
  );
}

