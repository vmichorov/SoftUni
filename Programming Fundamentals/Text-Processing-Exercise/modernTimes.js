function modernTimes(sentence) {
    let words = sentence.split(` `);
    for (let word of words) {
        let isValid = true;
        if (word[0] === `#` && word.length > 1) {
            for (let i = 1; i < word.length; i++) {
                let code = word.charCodeAt(i);
                if (code < 65 || code > 90 && code < 97 || code > 122) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                console.log(word.slice(1));
            }
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');