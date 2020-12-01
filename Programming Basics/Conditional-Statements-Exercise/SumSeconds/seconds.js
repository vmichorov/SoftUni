function solve(first, second, third) {
    first = Number(first);
    second = Number(second);
    third = Number(third);
    let totalTime = first + second + third;
    let minutes = totalTime / 60;
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${Math.floor(minutes)}:0${seconds}`);
    } else {
        console.log(`${Math.floor(minutes)}:${seconds}`);
    }
}

solve("35", "45", "44");
solve("50", "50", "49");