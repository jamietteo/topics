const fibonacci = (n, first = 0, second = 1) =>
  (n == 0)
    ? []
    : [first, ...fibonacci(n - 1, second, first + second)];

console.log(fibonacci(10)); // [0, 1,  1,  2,  3,5, 8, 13, 21, 34]

const fibonacci_lastNumber = (n, first = 0, second = 1) =>
  (n == 0)
    ? null
    : fibonacci_lastNumber(n - 1, second, first + second) || first;

console.log(fibonacci_lastNumber(10)); // 34