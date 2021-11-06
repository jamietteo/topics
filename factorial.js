// n! -> k = n * (n-1) * (n-2) * (n-3) ... 

// iteration function to factorial number
const factorial_iter = (n) => {
  let a = 1;
  for (let i = 1; i <= n; i++) {
    a *= i;
  }
  return a;
};


// recursive function to factorial number
const factorial_recur = (n) => {
  if (n == 0) return 1;
  return n * factorial_recur(n - 1);
};