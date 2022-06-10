// Задание 1
function getArrayParams(arr) {
  let min, max, sum = 0, avg = 0;

  arr.forEach(item => {
    sum += item;
    min = typeof min === 'undefined' ? item : (min > item ? item : min);
    max = typeof max === 'undefined' ? item : (max < item ? item : max);
  });
  avg = Math.round (sum / arr.length * 100) / 100;

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  arr.forEach($item => {
    sum += $item;
  });
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  arrOfArr.forEach($arr => {
    let sum = func($arr);
    max = sum > max ? sum : max;
  });
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max;
  arr.forEach(item => {
    min = typeof min === 'undefined' ? item : (min > item ? item : min); 
    max = typeof max === 'undefined' ? item : (max < item ? item : max);
  });
  return Math.abs(max - min);
}
