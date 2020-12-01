function graduation(input) {
    let name = input[0];
    let index = 1;
    let currentClass = 1;
    let grade = Number(input[index]);
    let timesExcluded = 0;
    let average = 0;
    let total = 0;

    while (currentClass <= 12) {
        if (grade >= 4.00) {
            currentClass++;
            total += grade;
        } else {
            timesExcluded++;

            if (timesExcluded === 2) {
                console.log(`${name} has been excluded at ${currentClass} grade`);
                break;
            }
            continue;
        }
        index++;
        grade = Number(input[index]);
        timesExcluded = 0;
    }
    if (currentClass > 12) {
        average = total / 12;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"
]);