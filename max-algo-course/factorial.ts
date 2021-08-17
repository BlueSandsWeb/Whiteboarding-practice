function factorial(num: number) {
  let answer = 1;

  // if (num < 0) return undefined;
  if (num === 0) return 0;

  for (let i = num; i > 1; i--) {
    answer *= i;
  }

  return answer;
}

console.log(factorial(5));
// console.log(factorial(-4));
