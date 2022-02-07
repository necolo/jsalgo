function insertionSort (arr) {
    for (let i = 0; i < arr.length; i ++) {
        let min = arr[i];
        let idx = i;
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[j] < min) {
                min = arr[j];
                idx = j;
            }
        }
        if (min !== arr[i]) {
            arr[idx] = arr[i];
            arr[i] = min;
        }
    }
}

function insertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        const base = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > base) {
            arr[j + 1] = arr[j];
            j --;
        }
        arr[j + 1] = base;
    }
}

function insertionSort3(arr) {
    for (let i = 1; i < arr.length; i++) {
        const base = arr[i];
        let idx = i;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > base) {
                arr[idx] = arr[j];
                arr[j] = base;
                idx = j;
            }
        }
    }
}

module.exports = insertionSort;
