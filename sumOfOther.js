function sumOfOther(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(sum - arr[i]);
  }
  return newArr;
}