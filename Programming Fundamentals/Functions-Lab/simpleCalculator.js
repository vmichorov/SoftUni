function simpleCalculator(arg1, arg2, arg3) {
    let firstNum = arg1;
    let secondNum = arg2;
    let operator = arg3;
    let result = 0;

    switch (operator) {
        case `multiply`:
            result = firstNum * secondNum;
            break;
        case `divide`:
            result = firstNum / secondNum;
            break;
        case `add`:
            result = firstNum + secondNum;
            break;
        case `subtract`:
            result = firstNum - secondNum;
            break;
    }
    console.log(result);
}

simpleCalculator(50, 13, `subtract`);