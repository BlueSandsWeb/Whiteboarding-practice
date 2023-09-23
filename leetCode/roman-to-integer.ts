function romanToInt(s: string): number {
  // Loop over string and break down into numbers in an array
  console.log(lettersToNums(s));

  // var to store answer
  // Loop over array
  // Variable to store if this number is addition or subtraction. Default to addition
  // Loop over following numbers to check if this number is addition or subtractionm
  // If larger number found, convert to subtraction
  // Add or subtract from answer number
  // return answer

  return 0;
}

function lettersToNums(s: string): number[] {
  const nums: number[] = [];
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    switch (s[i]) {
      case "I":
        nums.push(1);
        break;
      case "V":
        nums.push(5);
        break;
      case "X":
        nums.push(10);
        break;
      case "L":
        nums.push(50);
        break;
      case "C":
        nums.push(100);
        break;
      case "D":
        nums.push(500);
        break;
      case "M":
        nums.push(1000);
        break;
    }
  }
  return nums;
}

romanToInt("III");
romanToInt("LVII");
romanToInt("MCMXCIV");
