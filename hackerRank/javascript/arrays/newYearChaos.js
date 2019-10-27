// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up,
// and each person wears a sticker indicating their initial position in the queue. Initial positions increment by from at
// the front of the line to n at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions,
// they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if
// n = 8 and person 5 bribes person 4, the queue will look like this: [1,2,3,5,4,6,7,8].

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

// Constraints
// 1 <= t <= 10
// 1 <= n <= 10^5

// Output Format

// Print an integer denoting the minimum number of bribes needed to get the queue into its final state.
// Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than 2 people.

// Sample Input

// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4

// Sample Output

// 3
// Too chaotic

function minimumBribes(q) {
  // Second try, Do something similar to a bubble sort, that moves an array using swaps to match and counts swaps
  console.log(q);

  for (let i = 1; i <= q.length; i++) {}

  //   First whack at it.  Doesn't account for every case
  //   let minBribes = 0;
  //   for (let i = 0; i < q.length - 1; i++) {
  //     // check each item against the next item for difference.
  //     if (q[i] > q[i + 1]) {
  //       minBribes += q[i] - q[i + 1];
  //     }
  //     if (q[i] > q[i + 1] + 2) {
  //       console.log(`Too chaotic`);
  //       return `Too chaotic`;
  //     }
  //   }
  //   console.log(minBribes);
  //   return minBribes;
}

minimumBribes([2, 1, 5, 3, 4]); // -> 3
minimumBribes([2, 5, 1, 3, 4]); // -> 'Too chaotic'
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]); // -> `Too chaotic`
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); // -> 7
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]); // -> 4

// [ 1 2 5 3 7 8 6 4 ]
// [ 1 2 3 4 5 6 7 8 ]
