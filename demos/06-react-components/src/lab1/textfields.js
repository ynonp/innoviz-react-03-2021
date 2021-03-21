import { useState } from 'react';

export default function TextFields(props) {
  const [text, setText] = useState('');
  function handleChange(ev) {
    setText(ev.target.value);
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <input type="text" value={text} onChange={handleChange} />
      <input type="text" value={text} onChange={handleChange} />
      <input type="text" value={text} onChange={handleChange} />
      <input type="text" value={text} onChange={handleChange} />
    </>
  );
}

