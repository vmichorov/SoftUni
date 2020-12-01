function racing(litres, usage, laps) {
    litres = Number(litres);
    usage = Number(usage);
    laps = Number(laps);

    for (let i = 0; i < laps; i++) {
        litres -= usage - 0.1;

        if (litres <= 0) {
            console.log(`You are out of fuel in round ${i}!`);
            break;
        }
    }

    if (litres > 0) {
        console.log(`Congrats! You won the race!`);
    }
}