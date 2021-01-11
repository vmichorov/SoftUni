function metersToKilometers(par1) {
    let meters = Number(par1);
    let kilometers = (meters / 1000).toFixed(2);

    console.log(kilometers);
}

metersToKilometers(798);