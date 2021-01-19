function biggestElement(inputArr) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < inputArr.length; i++) {
        let current = inputArr[i];
        for (let j = 0; j < current.length; j++) {
            if (current[j] > max) {
                max = current[j];
            }
        }
    }
    return max;
}

console.log(biggestElement(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
));
console.log(biggestElement(
    [
        [3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]
    ]
));