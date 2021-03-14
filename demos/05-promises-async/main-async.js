const btn = document.querySelector('button');
const result = document.querySelector('#result');

// returns Promise that resolves AFTER ms
function sleep(ms) {
  return new Promise((resolve, reject) => {
    if (ms <= 0) {
      reject("Invalid sleep time");
    }

    setTimeout(function() {
      resolve(ms);
    }, ms);
  });
}


async function demo(ms) {
  return await sleep(ms);
}

async function main() {
  // await Promise.all([sleep(1000), sleep(2000)]);
  await sleep(1000);
  await sleep(2000);
}


demo(1000).then(function(val) {
  console.log(`Demo done, value = ${val}`);
});

demo(2000).then(function(val) {
  console.log(`Demo done, value = ${val}`);
});


async function startLoadData() {
  try {
    const response = await fetch("https://swapi.dev/api/people/1/");
    const data = await response.json();
    result.innerHTML = data.name;
  } catch(err) {
    alert("Sorry no network");
  }
}

btn.addEventListener('click', startLoadData);


