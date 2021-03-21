import React from 'react';

LightBulb.defaultProps = {
  color: 'yellow',
  start: false,
}

export default function LightBulb(props) {
  const { color, start } = props;
  const [ isOn, setValue ] = React.useState(start);

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
    background: isOn ? color : 'transparent',
  };

  return (
    <div>
      <div className='light' style={style} />
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}




