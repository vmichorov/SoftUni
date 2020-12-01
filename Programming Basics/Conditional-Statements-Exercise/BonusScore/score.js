function solve(input) {
    let score = Number(input);
    let bonus = 0;
    let total = 0;

    if (score <= 100) {
        bonus += 5;
    } else if (score > 1000) {
        bonus += score * 0.10;
    } else {
        bonus += score * 0.20;
    }

    if (score % 2 === 0) {
        bonus += 1;
    }

    if (score % 10 === 5) {
        bonus += 2;
    }
    total = score + bonus;

    console.log(bonus);
    console.log(total);
}

solve("15875");