function solve(firstNum, secondNum) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    if (firstNum > secondNum) {
        console.log(firstNum);
    } else {
        console.log(secondNum);
    }
}

solve("5", "3");
solve("2", "6");
solve("10", "10")