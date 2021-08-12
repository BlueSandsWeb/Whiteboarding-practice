function isPrime(num) {
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 1; i < 50; i++) {
  console.log(i, " is prime: ", isPrime(i));
}
