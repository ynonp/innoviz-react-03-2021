import './fib';

/**
const arr = [10, 20, 30];
const brr = [...arr, 40];

const x = { one: 10, two: 20 };
const y = { ...x, three: 30 };
 **/


export function printTimesFromWeirdDevelopersDownstairs(weirdOptions) {
  const { title: text, times } = weirdOptions;
  return printTimes({ text, times });
}

export function printTimes({ text, times = 5 }) {
  let result = "";

  for (let i=0; i < times; i++) {
    result += `${String(i + 1).padStart(2, '0')} ${text}\n`;
  }

  return result;
}

// print 'hello world' ten times:
console.log(printTimes({ text: 'hello world', times: 3 }));

