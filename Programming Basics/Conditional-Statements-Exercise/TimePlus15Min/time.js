function solve(hour, mins) {
    hour = Number(hour);
    mins = Number(mins);
    mins += 15;

    if (mins >= 60) {
        mins -= 60;
        hour += 1;
    }

    if (hour === 24) {
        hour -= 24;
    }

    if (mins < 10) {
        console.log(`${hour}:0${mins}`);
    } else {
        console.log(`${hour}:${mins}`);
    }
}

solve("1", "32"); // 1:47
solve("3", "54"); // 4:09
solve("5", "30"); // 5:45