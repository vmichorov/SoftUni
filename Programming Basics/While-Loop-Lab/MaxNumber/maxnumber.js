function maxNumber(input) {
    let index = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let current = input[index];

    while (current !== "Stop") {
        current = Number(current);

        if (current > max) {
            max = current;
        }
        index++;
        current = input[index];
    }

    console.log(max);
}

maxNumber(["-1",
"-2",
"Stop"])