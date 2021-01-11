function maxSequence(inputArr) {
    let result = [];
    for (let i = 0; i < inputArr.length; i++) {
        let sequence = [inputArr[i]];
        for (let j = i + 1; j < inputArr.length; j++) {
            if (inputArr[i] === inputArr[j]) {
                sequence.push(inputArr[j]);
            } else {
                break;
            }
        }
        if (result.length < sequence.length) {
            result = sequence;
        }
    }
    console.log(result.join(` `));
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);