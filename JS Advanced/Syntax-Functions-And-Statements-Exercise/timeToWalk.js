function timeToWalk(steps, footprint, speedKmH) {
    let speedMS = speedKmH * 1000 / 3600;
    let distance = steps * footprint;
    let breaks = Math.floor(distance / 500);
    let time = distance / speedMS + breaks * 60;

    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    time -= hours * 3600;
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    time -= minutes * 60;
    let seconds = time.toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);