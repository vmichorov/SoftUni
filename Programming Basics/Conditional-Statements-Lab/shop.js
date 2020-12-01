function solve(vacationPrice, puzzles, dolls, teddyBears, minions, trucks) {
    vacationPrice = Number(vacationPrice);
    puzzles = Number(puzzles);
    dolls = Number(dolls);
    teddyBears = Number(teddyBears);
    minions = Number(minions);
    trucks = Number(trucks);
    let totalSum = (puzzles * 2.60) + (dolls * 3.00) + (teddyBears * 4.10) +
        (minions * 8.20) + (trucks * 2.00);
    let toysCount = puzzles + dolls + teddyBears + minions + trucks;

    if (toysCount >= 50) {
        discount = totalSum * 0.25;
        totalSum -= discount;
    }
    let rent = totalSum * 0.10;
    totalSum -= rent;

    if (totalSum >= vacationPrice) {
        let moneyLeft = totalSum - vacationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = vacationPrice - totalSum;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

solve("40.8", "20", "25", "30", "50", "10");
solve("320", "8", "2", "5", "5", "1");