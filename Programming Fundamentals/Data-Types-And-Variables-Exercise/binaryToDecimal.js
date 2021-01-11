function binaryToDecimal(par1) {
    let binaryNumString = par1;
    let power = binaryNumString.length - 1;
    let sum = 0;

    for (let i = 0; i < binaryNumString.length; i++) {
        let current = Number(binaryNumString[i]);
        sum += current * Math.pow(2, power);
        power--;
    }

    console.log(sum);
}

binaryToDecimal(00001001);