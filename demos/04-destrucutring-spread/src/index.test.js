import { printTimes, printTimesFromWeirdDevelopersDownstairs } from './index';

test("it should print stuff", () => {
  const result = printTimes({ text: 'hello', times: 3 });
  expect(result.trim()).toEqual(`
01 hello
02 hello
03 hello
`.trim());
});

test("it should print stuff with default", () => {
  const result = printTimes({ text: 'hello' });
  expect(result.trim()).toEqual(`
01 hello
02 hello
03 hello
04 hello
05 hello
`.trim());
});

test("should work with weird options", () => {
  const result = printTimesFromWeirdDevelopersDownstairs({ title: 'hello', text: 'bye bye' });
  expect(result.trim()).toEqual(`
01 hello
02 hello
03 hello
04 hello
05 hello
`.trim());
});
