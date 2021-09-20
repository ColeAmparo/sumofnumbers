const test = [1, 2, 3, 4, 5, 6, 7, 8];
function sumFor(arr) {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return sum;
}

console.log(sumFor(test));

function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(test));

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumRecursion(arr.slice(1, arr.length));
}

console.log(sumRecursion(test));

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(test));
