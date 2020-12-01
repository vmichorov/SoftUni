function oldLibrary(input) {
    let book = input[0];
    let index = 1;
    let current = input[index];
    let searched = 0;

    while (current !== book) {
        if (current === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${searched} books.`);
            break;
        }

        searched++;
        index++;
        current = input[index];
    }
    if (current === book) {
        console.log(`You checked ${searched} books and found it.`);
    }
}

oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])