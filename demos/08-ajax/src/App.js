import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

async function getData(path, id) {
  const data = await fetch(`https://swapi.dev/api/${path}/${id}/`);

  return await data.json();
}

// Custom Hook
function useSwapi(path, id) {
  const [ data, setData ] = useState({});

  useEffect(function() {
    let isActive = true;
    getData(path, id).then(function(data) {
      if (isActive) {
        setData(data);
      }
    });

    return function cancel() {
      isActive = false;
    }
  }, [id]);

  return data;
}

function SwFilm(props) {
  const { id } = props;
  const data = useSwapi('films', id);

  return (
    <div>
      <p>{data.opening_crawl}</p>
    </div>
  );
}


function SwCharacter(props) {
  const { id } = props;
  const data = useSwapi('people', id);

  return (
    <div>
      <p>Hello {data.name}</p>
      <p>You weigh {data.mass}kg</p>
    </div>
  );
}


function App() {
  const [ id, setId ] = useState(2);

  return (
    <div className="App">
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <SwCharacter id={id} />
      <SwFilm id={4} />
    </div>
  );
}

export default App;
