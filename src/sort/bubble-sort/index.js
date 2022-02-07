function bubbleSort (arr) {
    let moved = true;
    let temp = 0;
    while (moved) {
        moved = false;
        for (let i = 1; i < arr.length; i ++) {
            if (arr[i] < arr[i - 1]) {
                temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                moved = true;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;
