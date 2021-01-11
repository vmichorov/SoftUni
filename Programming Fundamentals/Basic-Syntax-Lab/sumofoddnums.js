function sumOfOddNums(par1) {
    let n = Number(par1);
    let count = 0;
    let sum = 0;
    let current = 1;

    while (count < n) {
        if (current % 2 === 1) {
            sum += current;
            count++;
            console.log(current);
        }
        current++;
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNums("3");