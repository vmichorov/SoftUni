function equalArrays(input1, input2) {
    let firstArr = input1;
    let secondArr = input2;
    let totalSum = 0;

    for (let i = 0; i <= firstArr.length - 1; i++) {
        if (firstArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    for (let i = 0; i <= firstArr.length - 1; i++) {
        let current = Number(firstArr[i]);
        totalSum += current;
    }
    console.log(`Arrays are identical. Sum: ${totalSum}`);
}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);