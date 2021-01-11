function magicSum(arr, par) {
    let numbersArr = arr;
    let targetSum = par;

    for (let i = 0; i < numbersArr.length; i++) {
        for (let j = i + 1; j < numbersArr.length; j++) {
            let result = numbersArr[i] + numbersArr[j];
            if (result === targetSum) {
                console.log(`${numbersArr[i]} ${numbersArr[j]}`);
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6],
    6
);