function solve(days, bakers, cakes, waffles, pancakes) {
    days = Number(days);
    bakers = Number(bakers);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);
    let cakePrice = cakes * 45.00;
    let wafflePrice = waffles * 5.80;
    let pancakePrice = pancakes * 3.20;
    let dailyBaker = cakePrice + wafflePrice + pancakePrice;
    let fullDay = dailyBaker * bakers;
    let totalSum = fullDay * days;
    totalSum = totalSum * (7 / 8);

    console.log(totalSum);
}

solve("131", "5", "9", "33", "46")