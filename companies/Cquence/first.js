// https://github.com/power-assert-js/power-assert
const { assert } = window;

function getRanges() {
  return [{ start: 1, end: 1 }];
}

console.clear();

test([1, 2, 3], [{ start: 1, end: 3 }]);
test(
  [1, 2, 4, 5, 7],
  [
    { start: 1, end: 2 },
    { start: 4, end: 5 },
    { start: 7, end: 7 },
  ]
);

function test(input, expectedOutput) {
  try {
    assert.deepStrictEqual(getRanges(input), expectedOutput);

    console.log(`test case ${input} PASSED`);
  } catch (err) {
    console.error(`test case ${input} FAILED: ${err.message}`);
  }
}
