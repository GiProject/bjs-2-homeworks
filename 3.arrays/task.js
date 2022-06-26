function compareArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every(function(value, index) {
    return arr2[index] === value;
  });
}

function advancedFilter(arr) {
  return arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10);
}