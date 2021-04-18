import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const url = 'https://envytetlgk8nivb.m.pipedream.net';
const resultsUrl = 'https://pipedream.com/@ynonperek/lab1-p_yKCD9o2';

/**
 * Your Task:
 *
 * Change to form to AJAX
 *
 * Hint: https://stackoverflow.com/questions/46640024/how-do-i-post-form-data-with-fetch-api
 */

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
