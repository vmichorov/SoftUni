function occurrences(text, searched) {
    let count = 0;
    text = text.split(` `);
    for (let word of text) {
        if (word == searched) {
            count++;
        }
    }
    console.log(count);
}

occurrences("This is a word and it also is a sentence", "is");