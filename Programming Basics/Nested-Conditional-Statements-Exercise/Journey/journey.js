function solve(budget, season) {
    budget = Number(budget);
    season = season;
    let spentMoney = 0;

    // NOT SENT

    switch (season) {
        case "summer":
            if (budget <= 100) {
                spentMoney = budget * 0.30;
                console.log("Somewhere in Bulgaria");
                console.log(`Camp - ${spentMoney.toFixed(2)}`)
            } else if (budget <= 1000) {
                spentMoney = budget * 0.40;
                console.log("Somewhere in Balkans");
                console.log(`Camp - ${spentMoney.toFixed(2)}`);
            } else {
                spentMoney = budget * 0.90;
                console.log("Somewhere in Europe");
                console.log(`Hotel - ${spentMoney.toFixed(2)}`);
            }
            break;
        case "winter":
            if (budget <= 100) {
                spentMoney = budget * 0.70;
                console.log("Somewhere in Bulgaria");
                console.log(`Hotel - ${spentMoney.toFixed(2)}`)
            } else if (budget <= 1000) {
                spentMoney = budget * 0.80;
                console.log("Somewhere in Balkans");
                console.log(`Hotel - ${spentMoney.toFixed(2)}`);
            } else {
                spentMoney = budget * 0.90;
                console.log("Somewhere in Europe");
                console.log(`Hotel - ${spentMoney.toFixed(2)}`);
            }
            break;
    }
}

solve("678.53", "winter");