function negativePositiveNums(inputArr) {
    let result = [];
    for (let num of inputArr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    return result.join(`\n`);
}

console.log(negativePositiveNums([3, -2, 0, -1]));