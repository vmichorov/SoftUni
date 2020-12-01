function sumNumbers(input) {
    let maxNum = Number(input[0]);
    let index = 1;
    let current = Number(input[index]);
    let sum = 0;

    while (sum < maxNum) {
        sum += current;
        index++;
        current = Number(input[index]);
    }

    console.log(sum);
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])