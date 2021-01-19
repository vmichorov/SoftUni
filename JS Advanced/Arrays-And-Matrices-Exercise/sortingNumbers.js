function sortingNumbers(numbersArr) {
    let result = [];
    numbersArr = numbersArr.sort((a, b) => a - b);
    for (let i = 0; i < numbersArr.length / 2; i++) {
        result.push(numbersArr[i]);
        result.push(numbersArr[numbersArr.length - 1 - i]);
    }
    if (numbersArr.length % 2 == 1) {
        result.pop();
    }
    return result;
}

// sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);