//Quicksort is an efficient sorting algorithm that is based on the divide and conquer strategy.

const partition = (array, leftIndex, rightIndex) => {
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
    while (leftIndex <= rightIndex) {
      while (array[leftIndex] < pivot) {
        leftIndex++;
      }
      while (array[rightIndex] > pivot) {
        rightIndex--;
      }
      if (leftIndex <= rightIndex){
        swap(array, leftIndex, rightIndex)
        leftIndex++
        rightIndex--
      }
    }
    return leftIndex
}
  
  module.exports = {
    partition
  };


const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
}