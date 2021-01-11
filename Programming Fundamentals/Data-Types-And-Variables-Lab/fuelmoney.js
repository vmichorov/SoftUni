function fuelMoney(par1, par2, par3) {
    let distance = Number(par1);
    let passengers = Number(par2);
    let litrePrice = Number(par3);
    let neededFuel = 0;
    neededFuel += (distance / 100) * 7;
    neededFuel += passengers * 0.100;
    let neededMoney = neededFuel * litrePrice;

    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}

fuelMoney(`260`, `9`, `2.49`);