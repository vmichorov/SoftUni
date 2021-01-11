function oddOccurrences(input) {
    let sentence = input.split(` `);
    let wordsObj = {};
    for (let word of sentence) {
        word = word.toLowerCase();
        if (!wordsObj.hasOwnProperty(word)) {
            wordsObj[word] = 0;
        }
        wordsObj[word]++;
    }
    let valid = ``;
    let words = Object.keys(wordsObj);
    for (let word of words) {
        if (wordsObj[word] % 2 === 1) {
            valid += word + ` `;
        }
    }
    console.log(valid);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');