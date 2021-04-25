import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { LanguageContext, texts } from './languages';


function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <LanguageContext.Provider value={language}>
        <p>Current language = {language}</p>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="he">Hebrew</option>
          <option value="en">English</option>
        </select>
        <Counter />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
