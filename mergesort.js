// Merge Sort

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
}
  
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
  
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
  
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
  
    return result;
}
  
console.log("Merge Sort 1:", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("Merge Sort 2:", mergeSort([105, 79, 100, 110]));