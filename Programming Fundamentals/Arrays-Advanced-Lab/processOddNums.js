function processOddNums(inputArr) {
    let result = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 === 1) {
            result.push(inputArr[i]);
        }
    }
    return result
        .reverse()
        .map(x => x * 2)
        .join(` `);
}

console.log(processOddNums([3, 0, 10, 4, 7, 3]));