function solve(sum, length, percent) {
    sum = Number(sum);
    length = Number(length);
    percent = Number(percent);
    let increase = sum * (percent / 100);
    let monthlyIncrease = increase / 12;
    let totalSum = sum + (length * monthlyIncrease);

    console.log(totalSum);
}

solve("2350", "6", "7")