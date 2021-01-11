function biggestNumber(par1, par2, par3) {
    let firstNum = Number(par1);
    let secondNum = Number(par2);
    let thirdNum = Number(par3);

    if (firstNum >= secondNum && firstNum >= thirdNum) {
        console.log(firstNum);
    } else if (secondNum >= firstNum && secondNum >= thirdNum) {
        console.log(secondNum);
    } else {
        console.log(thirdNum);
    }
}

biggestNumber(43,
    43.2,
    43.1
);