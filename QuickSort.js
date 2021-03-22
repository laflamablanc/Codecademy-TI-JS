//Quicksort is an efficient sorting algorithm that is based on the divide and conquer strategy.






const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
}