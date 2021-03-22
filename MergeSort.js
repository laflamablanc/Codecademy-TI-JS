const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
        return startArray;
    }

    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
}

const merge = (leftArray, rightArray) => {
    console.log(leftArray);
    console.log(rightArray);
}

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));