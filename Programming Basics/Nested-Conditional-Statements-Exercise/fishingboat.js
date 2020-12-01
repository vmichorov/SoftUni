function solve(budget, season, people) {
    budget = Number(budget);
    season = season;
    people = Number(people);
    let price = 0;

    // NOT SENT

    switch (season) {
        case "Spring":
            price = 3000.00;
            if (people <= 6) {
                price *= 0.90;
            } else if (people <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            if (people % 2 === 0) {
                price *= 0.95;
            }
            break;
        case "Summer":
        case "Autumn":
            price = 4200.00;
            if (people <= 6) {
                price *= 0.90;
            } else if (people <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            if (people % 2 === 0 && season !== "Autumn") {
                price *= 0.95;
            }
            break;
        case "Winter":
            price = 2600.00;
            if (people <= 6) {
                price *= 0.90;
            } else if (people <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            if (people % 2 === 0) {
                price *= 0.95;
            }
            break;
    }

    if (budget >= price) {
        let moneyLeft = budget - price;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = price - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

solve("2000", "Winter", "13");