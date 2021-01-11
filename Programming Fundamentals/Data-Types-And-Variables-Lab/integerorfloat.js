function integerOrFloat(par1, par2, par3) {
    let firstNum = Number(par1);
    let secondNum = Number(par2);
    let thirdNum = Number(par3);

    let totalSum = firstNum + secondNum + thirdNum;

    if (totalSum % 1 === 0) {
        console.log(`${totalSum} - Integer`);
    } else {
        console.log(`${totalSum} - Float`);
    }
}

integerOrFloat(`1`, `2`, `3.1`);