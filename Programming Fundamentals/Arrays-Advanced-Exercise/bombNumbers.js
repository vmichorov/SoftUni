function bombNumbers(sequence, bombArr) {
    let bomb = bombArr.shift();
    let power = bombArr.shift();
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === bomb) {
            sequence.splice(i - power, power * 2 + 1);
        }
    }
    let totalSum = 0;
    for (let i = 0; i < sequence.length; i++) {
        totalSum += sequence[i];
    }
    console.log(totalSum);
}

bombNumbers([1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1], [5, 2]);