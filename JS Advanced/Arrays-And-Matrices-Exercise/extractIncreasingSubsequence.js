function extractSequence(numbersArr) {
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numbersArr.length; i++) {
        let current = numbersArr[i];
        if (current >= biggest) {
            biggest = current;
        } else {
            continue;
        }
        result.push(biggest);
    }
    return result;
}

extractSequence([
    20,
    3,
    2,
    15,
    6,
    1
]);