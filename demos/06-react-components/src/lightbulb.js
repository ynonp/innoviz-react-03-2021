import React from 'react';

export default function LightBulb() {
  const [ isOn, setValue ] = React.useState(false);

  function toggle() {
    // Either a function taking previous value
    setValue(v => !v);

    // Or a constant value
    // setValue(false);
  }

  const style = {
    overflow: 'hidden',
    width: '100px',
    height: '100px',
    display: 'inline-block',
    background: isOn ? 'yellow' : 'transparent',
  };

  return (
    <div>
      <div className='light' style={style} />
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

