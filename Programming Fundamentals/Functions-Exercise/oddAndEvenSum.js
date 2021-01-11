function oddEvenSum(arg1) {
    let number = arg1;
    let numAsString = String(number);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let current = Number(numAsString[i]);
        if (current % 2 === 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(3495892137259234);