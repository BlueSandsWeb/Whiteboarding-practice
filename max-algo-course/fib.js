function fib(num) {
  // In linear time O(n)
  let n1 = 1;
  let n2 = 1;
  for (let i = 1; i < num; i++) {
    const newNum = n2 + n1;
    n1 = n2;
    n2 = newNum;
  }
  return n2;

  // Constant time math equation - Had to look the EQ up. O(1)
  const phi = (1 + Math.sqrt(5)) / 2;
  const Phi = (1 - Math.sqrt(5)) / 2;

  return Math.round(-(Math.pow(Phi, num) - Math.pow(phi, num)) / Math.sqrt(5));
}

// console.log(fib(5));
