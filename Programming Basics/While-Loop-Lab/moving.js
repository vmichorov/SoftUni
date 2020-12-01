function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = width * length * height;
    let index = 3;
    let current = input[index];

    while (current !== "Done") {
        current = Number(current);
        freeSpace -= current;

        if (freeSpace < 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        index++;
        current = input[index];
    }

    if (freeSpace >= 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}

moving(["10",
"1",
"2",
"4",
"6",
"Done"])