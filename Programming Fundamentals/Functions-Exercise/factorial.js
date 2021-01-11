function factorial(arg1, arg2) {
    let firstNum = arg1;
    let secondNum = arg2;
    let firstFact = 1;
    let secondFact = 1;

    for (let i = firstNum; i > 0; i--) {
        firstFact *= i;
    }
    for (let i = secondNum; i > 0; i--) {
        secondFact *= i;
    }

    let result = firstFact / secondFact;
    console.log(result.toFixed(2));
}

factorial(5, 2);