function revealWords(words, sentence) {
    words = words.split(`, `);
    for (let word of words) {
        let stars = `*`.repeat(word.length);
        if (sentence.includes(stars)) {
            sentence = sentence.replace(stars, word);
        }
    }
    console.log(sentence);
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);