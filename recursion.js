// Iteration and recursion are key Computer Science techniques used in creating algorithms and developing software.
// Iterative function is one that loops to repeat some part of the code, and a recursive function is one that calls itself again to repeat the code.


// for loop 3,21ms runtime
const print_values = array => {
  for (let acc = 0; acc < array.length; acc++) {
    console.log(array[acc]);
  }
}

// iterative recursion 1,34ms runtime
const print_values_recur = (acc, array) => {
  if (acc >= array.length) return;
  console.log(array[acc]);
  return print_values_recur(acc + 1, array);
};

// sum array with for loop 2,5ms runtime
const sum_array = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

// sum array with recursion 0,24ms runtime
const sum_array_recur = (sum, index, array) => {
  if (index >= array.length) return sum;
  return sum_array_recur(sum + array[index], index + 1, array);
};