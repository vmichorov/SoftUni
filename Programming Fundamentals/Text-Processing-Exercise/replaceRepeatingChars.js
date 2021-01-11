function replaceChars(sequence) {
    let result = ``;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] !== sequence[i + 1]) {
            result += sequence[i];
        }
    }
    console.log(result);
}

replaceChars('qqqwerqwecccwd');