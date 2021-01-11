function calculator(par1, par2, par3) {
    let firstNum = Number(par1);
    let operator = par2;
    let secondNum = Number(par3);
    let result = 0;

    switch (operator) {
        case `+`:
            result = (firstNum + secondNum).toFixed(2);
            break;
        case `-`:
            result = (firstNum - secondNum).toFixed(2);
            break;
        case `*`:
            result = (firstNum * secondNum).toFixed(2);
            break;
        case `/`:
            result = (firstNum / secondNum).toFixed(2);
    }
    console.log(result);
}

calculator(5, `+`, 10);