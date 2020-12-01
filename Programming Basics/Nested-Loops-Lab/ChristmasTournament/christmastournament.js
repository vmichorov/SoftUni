function christmasTournament(input) {
    let days = Number(input[0]);
    let sportIndex = 1;
    let sport = input[sportIndex];
    let statusIndex = 2;
    let status = input[statusIndex];
    let daysWon = 0;
    let daysLost = 0;
    let totalRaised = 0;

    for (let i = 0; i < days; i++) {
        let dailyRaised = 0;
        let wins = 0;
        let losses = 0;
        while (sport !== "Finish") {
            if (status === "win") {
                wins++;
                dailyRaised += 20;
            } else if (status === "lose") {
                losses++;
            }

            sportIndex += 2;
            sport = input[sportIndex];
            statusIndex += 2;
            status = input[statusIndex];
        }
        if (wins > losses) {
            dailyRaised *= 1.10;
            daysWon++;
        } else {
            daysLost++;
        }
        totalRaised += dailyRaised;
        sportIndex += 1;
        sport = input[sportIndex];
        statusIndex += 1;
        status = input[statusIndex];
    }

    if (daysWon > daysLost) {
        totalRaised *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalRaised.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalRaised.toFixed(2)}`);
    }
}

christmasTournament([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ])