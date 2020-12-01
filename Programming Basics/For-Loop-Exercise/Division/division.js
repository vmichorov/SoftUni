function division(input) {
    let n = Number(input[0]);
    let divBy2 = 0;
    let divBy3 = 0;
    let divBy4 = 0;

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);

        if (current % 2 === 0) {
            divBy2++;
        }
        if (current % 3 === 0) {
            divBy3++;
        }
        if (current % 4 === 0) {
            divBy4++;
        }
    }

    console.log(`${(divBy2 / n * 100).toFixed(2)}%`);
    console.log(`${(divBy3 / n * 100).toFixed(2)}%`);
    console.log(`${(divBy4 / n * 100).toFixed(2)}%`);
}

division(["3",
"3",
"6",
"9"])
;