function phoneBook(input) {
    let phoneBook = {};
    for (let line of input) {
        let tokens = line.split(` `);
        if (!phoneBook.hasOwnProperty(tokens[0])) {
            phoneBook[tokens[0]] = ``;
        }
        phoneBook[tokens[0]] = tokens[1];
    }
    let keys = Object.keys(phoneBook);
    for (let key of keys) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344',
]);