import { useState, useContext } from 'react';
import { LanguageContext, texts } from './languages';


export default function Counter(props) {
  const [count, setCount] = useState(0);
  const currentLanguage = useContext(LanguageContext);
  const t = texts[currentLanguage];

  function click() {
    setCount(c => c + 1);
  }

  return (
    <div>
      <p>{t.hello}
        <button onClick={click}>{t.click_here}</button>
        {t.count} {count}
      </p>
    </div>
  );
}

