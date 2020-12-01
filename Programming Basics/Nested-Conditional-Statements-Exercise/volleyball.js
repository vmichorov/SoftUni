function solve(year, holidays, homeWeekEnds) {
    year = year;
    holidays = Number(holidays);
    homeWeekEnds = Number(homeWeekEnds);
    let games = 0;
    let sofiaWeekEnds = 48 - homeWeekEnds;
    games += sofiaWeekEnds * 3.0 / 4.0 + homeWeekEnds;
    games += holidays * 2.0 / 3.0;

    if (year === "leap") {
        games *= 1.15;
    }

    console.log(Math.floor(games));
}

solve("leap",
"0",
"1");