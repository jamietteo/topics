// Iteration and recursion are key Computer Science techniques used in creating algorithms and developing software.
// Iterative function is one that loops to repeat some part of the code, and a recursive function is one that calls itself again to repeat the code.

// factorial algorithm
    // n! -> k = n * (n-1) * (n-2) * (n-3) ... 

// iteration function to factorial number
const factorial_iter = (n) =>{
  let a = 1;
  for (let i = 1;i <= n; i++){
    a *= i;
  }
  return a;
};


// recursive function to factorial number
const factorial_recur = (n) => {
  if (n == 0) return 1;
  return n*factorial_recur(n-1);
};


// for loop 3,21ms runtime
const print_values = array => {
  for(let acc = 0; acc<array.length;acc++){
    console.log(array[acc]);
  }
}

// iterative recursion 1,34ms runtime
const print_values_iter = (acc, array) => {
  if(acc >= array.length) return;
  console.log(array[acc]);
  return print_values_iter(acc + 1, array);
};

// sum array with for loop 2,5ms runtime
const sum_array = (array, sum) => {
  for(let i = 0; i<array.length;i++){
    sum += array[i];
  }
  return sum;
};

// sum array with iterative recursion 0,24ms runtime
const sum_array_iter = (sum, index, array) => {
  if(index >= array.length) return sum;
  return sum_array_iter(sum + array[index], index + 1, array);
};
