function substring(word, sentence) {
    word = ` ${word} `;
    sentence = ` ${sentence} `.toLowerCase();
    if (sentence.includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word}not found!`);
    }
}

substring(
    'python',
    'JavaScript is the best programming language'
);