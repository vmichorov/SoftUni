function solve(hour, day) {
    hour = Number(hour);
    day = day;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hour >= 10 && hour <= 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        case "Sunday":
            console.log("closed");
            break;
    }
}