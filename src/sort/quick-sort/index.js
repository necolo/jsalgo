function quickSort (arr, left = 0, right = arr.length - 1) {
    // 思路: 每次遍历把更大的数和右边更小的数交换, 让大数靠右
    if (left >= right) { return; }
    let base = arr[right];
    let idx = left - 1;
    let num = 0;
    for (let i = left; i <= right; i ++) {
        num = arr[i];
        if (num <= base) {
            idx ++;
            arr[i] = arr[idx];
            arr[idx] = num;
        }
    }
    quickSort(arr, left, idx - 1);
    quickSort(arr, idx + 1, right);
}
module.exports = quickSort;
