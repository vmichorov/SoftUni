function vacation(input) {
    let vacationPrice = Number(input[0]);
    let availableMoney = Number(input[1]);
    let actionIndex = 2;
    let action = input[actionIndex];
    let moneyIndex = 3;
    let money = Number(input[moneyIndex]);
    let days = 0;
    let spendDays = 0;

    while (availableMoney < vacationPrice) {
        days++;
        switch (action) {
            case "save":
                availableMoney += money; 
                spendDays = 0;
                if (availableMoney >= vacationPrice) {
                    console.log(`You saved the money for ${days} days.`);
                    break;
                }
                break;
            case "spend":
                availableMoney -= money;
                spendDays++;
                if (availableMoney < 0) {
                    availableMoney = 0;
                }
                if (spendDays === 5) {
                    console.log("You can't save the money.");
                    console.log(days);
                    break;
                }
                break;
        }
        actionIndex += 2;
        action = input[actionIndex];
        moneyIndex += 2;
        money = Number(input[moneyIndex]);
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
