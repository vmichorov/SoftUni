function censoredWords(text, word) {
    while (text.includes(word)) {
        let censored = `*`.repeat(word.length);
        text = text.replace(word, censored);
    }
    console.log(text);
}

censoredWords("A small sentence with some words", "small");