function maxNumber(input) {
    let myArr = input;
    let topIntegers = [];
    for (let i = 0; i < myArr.length; i++) {
        let current = myArr[i];
        if (i === myArr.length - 1) {
            topIntegers.push(current);
        }
        let isBigger = false;
        for (let j = i + 1; j < myArr.length; j++) {
            let comparable = myArr[j];
            isBigger = false;
            if (current > comparable) {
                isBigger = true;
            } else {
                break;
            }
        }
        if (isBigger) {
            topIntegers.push(current);
        }
    }
    console.log(topIntegers.join(` `));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);