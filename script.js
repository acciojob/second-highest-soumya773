//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first; // Update second to be the old highest
      first = num;    // Update the highest value
    } else if (num < first && num > second) {
      second = num;   // Update second-highest
    }
  }

  return second === -Infinity ? -Infinity : second; // Return -Infinity if no second-highest found
}
