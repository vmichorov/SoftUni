function sorting(inputArr) {
    let result = [];
    let sortedArr = inputArr.sort((a, b) => b - a);
    for (let i = 0; i < sortedArr.length / 2; i++) {
        result.push(sortedArr[i]);
        if (sortedArr[i] === sortedArr[sortedArr.length - 1 - i]) {
            break;
        } else {
            result.push(sortedArr[sortedArr.length - 1 - i])
        }
    }
    console.log(result.join(` `));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 99]);