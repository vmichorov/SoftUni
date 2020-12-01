function sumOfNumbers(arg) {
    let textNumber = arg + "";
    let total = 0;

    for(let i = 0; i < textNumber.length; i++) {
        let current = Number(textNumber[i]);
        total = total + current;
    }
    console.log(`The sum of the digits is:${total}`);
}

sumOfNumbers("564891");