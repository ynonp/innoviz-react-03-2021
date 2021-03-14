const btn = document.querySelector('button');
const result = document.querySelector('#result');

function ready(ev) {
  const xhr = ev.target;
  const data = JSON.parse(xhr.responseText);
  result.innerHTML = data.name;
}


function startLoadData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://swapi.dev/api/people/1/");
  xhr.addEventListener('load', ready);
  xhr.send();
}

btn.addEventListener('click', startLoadData);
