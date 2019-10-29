function arrayManipulation(n, queries) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(0);
  }
  console.log(arr);
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0] - 1; j <= queries[i][1] - 1; j++) {
      arr[j] += queries[i][2];
    }
    console.log(arr);
  }
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

array = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
console.log(arrayManipulation(3, array));
