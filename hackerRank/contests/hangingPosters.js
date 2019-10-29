// Arthur needs to hang n posters on his wall.
// Standing on the ground he can reach upto a height of h.
// Each poster is to be bolted at a certain height above the ground level, described by the array wallPoints.
// Each poster also has some length, defined by the array lengths.

// To hang a poster properly, Arthur needs to hold at least 50% of the length of the poster
// and the poster is to be bolted at a point which is 25% from its top.

// Arthur wants to know what is the minimum height of the ladder he should buy, in order to hang all the wall posters. The ladder is only available in integral heights.
// Arthur can reach any height upto the maximum possible height.

// The first line of the input contains two space separated integers, n and h.
// The next line contains n space separated integers, denoting the elements of the array wallPoints.
// The last line contains n space separated integers, denoting the elements of the array lengths.

// Example inputs:
// height, wallPoints, posterLengths
// 5, [15 11 17], [5 1 2]

// Example Explanation:
// Arthur's height is h = 5
// To hang the first poster, Arthur need to reach a height of 13.75, so he needs a ladder of height 9.
// To hang the second poster, Arthur need to reach a height of 10.75, so he needs a ladder of height 6.
// To hang the third poster, Arthur need to reach a height of 46.50, so he needs a ladder of height 12.

// So, the height of the ladder required is 12.

function solve(h, wallPoints, lengths) {
  // Write your code here
  // EQ per ladder height is wallPoint - (length * .25) - h
  let ladderHeight = 0;
  for (let i = 0; i < wallPoints.length; i++) {
    let currentLadderHeight = wallPoints[i] - lengths[i] * 0.25 - h;
    ladderHeight < currentLadderHeight
      ? (ladderHeight = currentLadderHeight)
      : null;
  }
  return Math.ceil(ladderHeight);
}

console.log(solve(5, [15, 11, 17], [5, 1, 2]) === 12);
console.log(solve(5, [5, 5], [4, 4]) === 0);
