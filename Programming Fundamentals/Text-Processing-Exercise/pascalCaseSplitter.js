function caseSplitter(sequence) {
    let result = [];
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === sequence[i].toUpperCase()) {
            let word = ``;
            word += sequence[i];
            for (let j = i + 1; j < sequence.length; j++) {
                if (sequence[j] === sequence[j].toLowerCase()) {
                    word += sequence[j];
                } else {
                    break;
                }
            }
            result.push(word);
        }
    }
    console.log(result.join(`, `));
}

caseSplitter('ThisIsSoAnnoyingToDo');