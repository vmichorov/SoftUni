function meetings(input) {
    let schedule = {};
    for (let line of input) {
        let [day, name] = line.split(` `);
        if (!schedule.hasOwnProperty(day)) {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    let keys = Object.keys(schedule);
    for (let key of keys) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);