function minNumber(input) {
    let count = Number(input[0]);
    let smallest = Number(input[1]);

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);

        if (current < smallest) {
            smallest = current;
        }
    }

    console.log(smallest);
}

minNumber(["3",
"-10",
"20",
"-30"])