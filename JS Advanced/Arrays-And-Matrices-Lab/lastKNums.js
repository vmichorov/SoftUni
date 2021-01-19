function lastKNums(len, k) {
    let sequence = [1];
    while (sequence.length !== len) {
        let sum = 0;
        for (let i = sequence.length - 1; i >= sequence.length - k; i--) {
            if (i < 0) {
                continue;
            }
            sum += sequence[i];
        }
        sequence.push(sum);
    }
    return sequence;
}

lastKNums(6, 3);
console.log(lastKNums(8, 2));