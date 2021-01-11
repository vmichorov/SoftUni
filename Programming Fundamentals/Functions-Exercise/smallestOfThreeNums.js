function smallestNum(arg1, arg2, arg3) {
    let firstNum = arg1;
    let secondNum = arg2;
    let thirdNum = arg3;

    if (firstNum <= secondNum && firstNum <= thirdNum) {
        console.log(firstNum);
    } else if (secondNum <= firstNum && secondNum <= thirdNum) {
        console.log(secondNum);
    } else {
        console.log(thirdNum);
    }
}