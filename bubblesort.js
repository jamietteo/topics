const bubbleSort = (arr) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
};

const recursiveBubbleSort = (arr, n = arr.length) => {
  if (n == 1) return arr;
  for (let j = 0; j < n - 1; j++){
    if (arr[j] > arr[j + 1]){
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    };
  };  
  return recursiveBubbleSort(arr, n-1);
};