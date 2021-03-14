function fib(n) {
  if ((n == 0) || (n == 1)) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function timed(f) {
  return function(n) {
    const s0 = Date.now();
    const result = f(n);
    const s1 = Date.now();
    console.log(`Took ${s1 - s0}ms`);
    return result;
  }

}

const timedFib = timed(fib);
console.log(timedFib(30));



