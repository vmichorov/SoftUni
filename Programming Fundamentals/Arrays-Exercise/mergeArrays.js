function mergeArrays(input1, input2) {
    let firstArr = input1;
    let secondArr = input2;
    let thirdArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        let firstArrEl;
        let secondArrEl;
        let result;
        if (i % 2 === 0) {
            firstArrEl = Number(firstArr[i]);
            secondArrEl = Number(secondArr[i]);
            result = firstArrEl + secondArrEl;
        } else {
            firstArrEl = firstArr[i];
            secondArrEl = secondArr[i];
            result = firstArrEl + secondArrEl;
        }
        thirdArr.push(result);
    }

    console.log(thirdArr.join(` - `));
}

mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);