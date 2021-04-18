import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const url = 'https://envytetlgk8nivb.m.pipedream.net';

function App() {
  const [submitted, setSubmitted] = useState(false);

  function submitFormViaAjax(ev) {
    // ev.preventDefault();
    // setSubmitted(true);
  }

  return (
    <div className="App">
      {!submitted && 
      (
        <form method="POST" action={url} onSubmit={submitFormViaAjax}>
          <label>
            Search:
            <input type="text" name="search" />
            <button type="submit" >Go</button>
          </label>
        </form>
      )}

      {submitted && (
        <p>No Result, <button onClick={() => setSubmitted(false)}>Search something else</button></p>
      )}
    </div>
  );
}

export default App;
