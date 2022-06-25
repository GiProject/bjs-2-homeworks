function compareArrays(arr1, arr2) {
  let result;

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.forEach(function(value, index) {
      if (arr2[index] !== value) {
        result = false;
        return false;
      }
  });

  if (typeof result  === 'undefined') {
    result = true;
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(function (item) {
      return item > 0 && item % 3 === 0;
  }).map(function(item) {
      return item * 10;
  });

  return resultArr; // array
}
