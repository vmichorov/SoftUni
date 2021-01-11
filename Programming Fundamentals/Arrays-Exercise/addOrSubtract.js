function addOrSubtract(input) {
    let myArr = input;
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < myArr.length; i++) {
        let current = myArr[i];
        oldSum += current;
        if (current % 2 === 0) {
            myArr[i] = current + i;
            newSum += myArr[i];
        } else {
            myArr[i] = current - i;
            newSum += myArr[i];
        }
    }
    console.log(myArr);
    console.log(oldSum);
    console.log(newSum);
}

addOrSubtract([5, 15, 23, 56, 35]);
addOrSubtract([-5, 11, 3, 0, 2]);