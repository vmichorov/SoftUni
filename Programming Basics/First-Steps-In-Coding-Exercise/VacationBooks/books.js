function solve(pages, perHour, days) {
    pages = Number(pages);
    perHour = Number(perHour);
    days = Number(days);
    let bookTime = pages / perHour;
    let hoursPerDay = bookTime / days;

    console.log(hoursPerDay);
}

solve("432", "15", "4")