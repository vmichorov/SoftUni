function dictionary(dictionary) {
    let terms = [];
    for (let word of dictionary) {
        let wordParse = JSON.parse(word);
        let wordData = Object.entries(wordParse);
        let currWord = {
            Term: wordData[0][0],
            Definition: wordData[0][1]
        }
        if (terms.length === 0) {
            terms.push(currWord);
            continue;
        }
        for (let i = 0; i < terms.length; i++) {
            let term = terms[i];
            if (term.Term === currWord.Term) {
                term.Definition = currWord.Definition;
                break;
            } else {
                if (i === terms.length - 1) {
                    terms.push(currWord);
                }
                continue;
            }
            break;
        }
    }
    terms = terms.sort((a, b) => a.Term.localeCompare(b.Term));
    for (let term of terms) {
        console.log(`Term: ${term.Term} => Definition: ${term.Definition}`);
    }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])