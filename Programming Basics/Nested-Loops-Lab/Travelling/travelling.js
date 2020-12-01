function travelling(input) {
    let command = input[0];
    let neededMoney = Number(input[1]);
    let savedMoney = 0;
    let moneyIndex = 2;
    let index = 0;

    while (command !== "End") {
        while (savedMoney < neededMoney) {
            let current = Number(input[moneyIndex]);
            savedMoney += current;

            if (savedMoney >= neededMoney) {
                console.log(`Going to ${command}!`);
                break;
            }
            moneyIndex++;
        }
        savedMoney = 0;
        index = moneyIndex + 1;
        command = input[index];
        index++;
        neededMoney = Number(input[index]);
        moneyIndex += 3;
    }

}

travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
