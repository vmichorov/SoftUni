function solve(budget, actors, price) {
    budget = Number(budget);
    actors = Number(actors);
    price = Number(price);
    let decorPrice = budget * 0.10;
    let clothesPrice = actors * price;

    if (actors > 150) {
        clothesPrice *= 0.90;
    }

    let totalCost = decorPrice + clothesPrice;

    if (budget >= totalCost) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    }
}

solve("15437.62", "186", "57.99");