function race(input) {
    let names = input.shift().split(`, `);
    let racers = {};
    for (let name of names) {
        if (!racers.hasOwnProperty(name)) {
            racers[name] = {
                distance: 0
            };
        }
    }
    let line = input.shift();
    while (line !== 'end of race') {
        let nameRegex = /[A-Za-z]/g;
        let name = line.match(nameRegex).join(``);
        let distRegex = /\d/g;
        let distance = line.match(distRegex).map(Number).reduce((p, c) => p += c);
        if (racers.hasOwnProperty(name)) {
            racers[name].distance += distance;
        }
        line = input.shift();
    }
    let racersArr = Object.entries(racers).sort(sortRacers);
    console.log(`1st place: ${racersArr[0][0]}`);
    console.log(`2nd place: ${racersArr[1][0]}`);
    console.log(`3rd place: ${racersArr[2][0]}`);

    function sortRacers([nameA, dataA], [nameB, dataB]) {
        return racers[nameB].distance - racers[nameA].distance;
    }
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll999999',
    'G@e54o$r6ge#',
    '7P%et^#e5346r99999',
    'T$o553m&6',
    'end of race'
]);