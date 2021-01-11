function sumFirstLast(inputArr) {
    let first = Number(inputArr[0]);
    let last = Number(inputArr[inputArr.length - 1]);
    return first + last;
}

console.log(sumFirstLast(['5', '10']));