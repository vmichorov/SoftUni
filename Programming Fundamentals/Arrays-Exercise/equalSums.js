function equalSums(input) {
    let myArr = input;
    let isValid = false;

    for (let i = 0; i < myArr.length; i++) {
        isValid = false;
        let leftSum = 0;
        let rightSum = 0;
        if (i === 0) {
            leftSum = 0;
        } else if (i === myArr.length - 1) {
            rightSum = 0;
        }
        for (let l = 0; l < i; l++) {
            leftSum += myArr[l];
        }
        for (let r = i + 1; r < myArr.length; r++) {
            rightSum += myArr[r];
        }
        if (leftSum === rightSum) {
            console.log(i);
            isValid = true;
            break;
        }
    }
    if (!isValid) {
        console.log(`no`);
    }
}

equalSums([1, 2, 3, 3]);