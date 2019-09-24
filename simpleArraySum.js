// Complete the simpleArraySum function in the editor below.It must return the sum of the array elements as an integer. 

function simpleArraySum(ar) {
  if (ar.length > 0) {
    let sum = 0;
    ar.forEach(num => {
      sum += num;
    })
    return sum;
  }

}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))