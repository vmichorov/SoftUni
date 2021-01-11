function wordsTracker(input) {
    let searched = input.shift().split(` `);
    let words = {};
    for (let word of searched) {
        words[word] = 0;
    }
    for (let element of input) {
        if (words.hasOwnProperty(element)) {
            words[element]++;
        }
    }
    let sorted = Object.keys(words).sort((a, b) => words[b] - words[a]);
    for (let key of sorted) {
        console.log(`${key} - ${words[key]}`);
    }
}

wordsTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);