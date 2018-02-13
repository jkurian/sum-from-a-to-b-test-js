
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  //sum(3,5)
  //sum(3,3), sum(3,3) + 4, sum(3,3) + sum(3,4) + 5
  if(fromN === toN) return toN;

  return toN + sum(fromN, toN-1);
}

module.exports = sum;