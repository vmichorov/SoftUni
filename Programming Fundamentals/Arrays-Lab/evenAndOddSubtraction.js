function evenAndOddSubtraction(input) {
    let myArr = input;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i <= myArr.length - 1; i++) {
        let current = myArr[i];
        if (current % 2 === 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
    }

    let difference = evenSum - oddSum;
    console.log(difference);
}

evenAndOddSubtraction([2, 4, 6, 8, 10]);