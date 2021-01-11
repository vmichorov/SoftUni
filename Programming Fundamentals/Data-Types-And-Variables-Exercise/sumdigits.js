function sumDigits(par1) {
    let num = Number(par1);
    let numText = String(num);
    let totalSum = 0;

    for (let i = 0; i < numText.length; i++) {
        let current = Number(numText[i]);
        totalSum += current;
    }

    console.log(totalSum);
}

sumDigits(543);