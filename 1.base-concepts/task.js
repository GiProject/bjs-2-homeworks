"use strict";
function solveEquation(a, b, c) {
  let arr = [], d;
  // код для задачи №1 писать здесь
  d = b**2-4*a*c;
  if (d === 0) {
    arr = [
      -b/(2*a)
    ];
  } else if (d > 0) {
    arr = [
      (-b + Math.sqrt(d) )/(2*a),
      (-b - Math.sqrt(d) )/(2*a)
    ];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
