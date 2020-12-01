function solve(type, count, budget) {
    type = type;
    count = Number(count);
    budget = Number(budget);
    let price = 0;

    // NOT SENT

    switch (type) {
        case "Roses":
            price = count * 5.00;
            if (count > 80) {
                price = price * 0.90;
            }
            break;
        case "Dahlias":
            price = count * 3.80;
            if (count > 90) {
                price = price * 0.85;
            }
            break;
        case "Tulips":
            price = count * 2.80;
            if (count > 80) {
                price = price * 0.85;
            }
            break;
        case "Narcissus":
            price = count * 3.00;
            if (count < 120) {
                price = price * 1.15;
            }
            break;
        case "Gladiolus":
            price = count * 2.50;
            if (count < 80) {
                price = price * 1.20;
            }
            break;
    }

    if (budget >= price) {
        let moneyLeft = budget - price;
        console.log(`Hey, you have a great garden with ${count} ${type} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = price - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

solve("Roses", "55", "250");