function minNumber(input) {
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let current = input[index];

    while (current !== "Stop") {
        current = Number(current);

        if (current < min) {
            min = current;
        }
        index++;
        current = input[index];
    }

    console.log(min);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])