function sumEvenNumbers(input) {
    let myArr = input;
    let totalSum = 0;

    for (let i = 0; i <= myArr.length - 1; i++) {
        let current = Number(myArr[i]);
        if (current % 2 === 0) {
            totalSum += current;
        }
    }

    console.log(totalSum);
}

sumEvenNumbers(['2', '4', '6', '8', '10']);