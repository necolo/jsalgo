function test (func) {
    console.log('--> Testing', func.name);
    const startTime = Date.now();
    const arr = [
        [3, 2, 1],
        [0, 5, 1, 3, 9, 7],
        [5, 2, 19],
        [],
        [1],
        [5, 1],
        [4, 4, 29, 5, 4, 1],
    ];
    for (const a of arr) {
        func(a);
    }
    const endTime = Date.now(); 
    console.log('Time cost', startTime - endTime);
    arr.map((a) => console.log(a));
}
