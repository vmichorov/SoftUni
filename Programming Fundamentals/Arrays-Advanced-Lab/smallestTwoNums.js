function smallestTwoNums(inputArr) {
    let sortedArr = inputArr.sort((a, b) => a - b);
    let smallestNums = sortedArr.slice(0, 2);
    return smallestNums.join(` `);
}

console.log(smallestTwoNums([3, 0, 10, 4, 7, 3]));