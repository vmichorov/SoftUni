function sortAnArray(inputArr) {
    let result = inputArr.sort().sort((a, b) => a.length - b.length);
    console.log(result.join(`\n`));
}

sortAnArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);