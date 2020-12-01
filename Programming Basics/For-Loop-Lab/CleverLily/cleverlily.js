function cleverLily(age, machinePrice, toyPrice) {
    age = Number(age);
    machinePrice = Number(machinePrice);
    toyPrice = Number(toyPrice);
    let totalMoney = 0;
    let givenMoney = 10;
    let toyCount = 0;

    for(let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            totalMoney += givenMoney - 1;
            givenMoney += 10;
        } else {
            toyCount += 1;
        }
    }
    totalMoney += toyCount * toyPrice;

    if (totalMoney >= machinePrice) {
        let difference = totalMoney - machinePrice;
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        let difference = machinePrice - totalMoney;
        console.log(`No! ${difference.toFixed(2)}`);
    }
}

cleverLily("21", "1570.98", "3");