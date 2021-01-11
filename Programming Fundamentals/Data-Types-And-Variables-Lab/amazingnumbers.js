function amazingNumbers(par1) {
    let num = Number(par1);
    let numText = String(num);
    let totalSum = 0;
    let isAmazing = false;

    for (let i = 0; i < numText.length; i++) {
        let current = Number(numText[i]);
        totalSum += current;
    }
    let sumText = String(totalSum);

    for (let i = 0; i <= sumText.length; i++) {
        let current = Number(sumText[i]);
        if (current === 9) {
            isAmazing = true;
            break;
        }
    }

    if (isAmazing) {
        console.log(`${numText} Amazing? True`);
    } else {
        console.log(`${numText} Amazing? False`);
    }
}

amazingNumbers(1233);