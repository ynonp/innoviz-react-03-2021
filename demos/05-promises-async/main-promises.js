const btn = document.querySelector('button');
const result = document.querySelector('#result');

function showData(data) {
  result.innerHTML = data.name;
}

function ready(response) {
  const p = response.json();
  p.then(showData);
}


function startLoadData() {
  const p = fetch("https://swapi.dev/api/people/1/");
  p.then(ready);
}

btn.addEventListener('click', startLoadData);

