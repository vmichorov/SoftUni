function smallestTwoNums(inputArr) {
    inputArr = inputArr.sort((a, b) => a - b);
    let result = inputArr.splice(0, 2);
    console.log(result);
}

smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);