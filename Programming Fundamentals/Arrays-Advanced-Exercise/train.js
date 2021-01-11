function train(inputArr) {
    let wagons = inputArr.shift().split(` `).map(Number);
    let capacity = Number(inputArr.shift());
    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i];
        if (command.includes(`Add`)) {
            let tempWagon = Number(command.split(` `)[1]);
            wagons.push(tempWagon);
        } else {
            let people = Number(command);
            for (let i = 0; i < wagons.length; i++) {
                if ((people + wagons[i]) <= capacity) {
                    wagons[i] += people;
                    break;
                } else {
                    continue;
                }
            }
        }
    }
    console.log(wagons.join(` `));
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
])