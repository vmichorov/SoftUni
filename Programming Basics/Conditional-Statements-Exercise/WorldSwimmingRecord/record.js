function solve(record, distance, perMeter) {
    record = Number(record);
    distance = Number(distance);
    perMeter = Number(perMeter);
    let time = distance * perMeter;
    let slowdown = Math.floor(distance / 15) * 12.5;
    let totalTime = time + slowdown;

    if (totalTime >= record) {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}

solve("55555.67", "3017", "5.03");