function triangleOfNumbers(par1) {
    let num = Number(par1);
    let sequence = "";

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            sequence += i + " ";
        }
        console.log(sequence);
        sequence = "";
    }
}

triangleOfNumbers("9");