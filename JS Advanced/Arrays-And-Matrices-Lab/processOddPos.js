function processOddPos(inputArr) {
    let result = [];
    for (let i = 1; i < inputArr.length; i += 2) {
        result.push(inputArr[i] * 2);
    }
    return result.reverse().join(' ');
}

console.log(processOddPos([10, 15, 20, 25]));
console.log(processOddPos([3, 0, 10, 4, 7, 3]));