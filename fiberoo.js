function fib() {
  const fibList = [0, 1];
  for (let i = 0; i <= 47; i++) {
    fibList.push(fibList[i] + fibList[i + 1]);
  }
  return fibList;
}

console.log(fib());

function numsToStrings(numList) {
  let stringList;
  // eslint-disable-next-line prefer-const
  stringList = _.map(numList, (element) => element.toString());
  return stringList;
}

console.log(numsToStrings(fib()));

function numEvenNums(list) {
  const evenNums = _.filter(list, function (num) { return num % 2 === 0; });
  return _.size(evenNums);
}

console.log(numEvenNums(fib()));
