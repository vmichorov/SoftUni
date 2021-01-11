function houseParty(inputArr) {
    let going = [];
    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i];
        if (command.includes(` is going!`)) {
            command = command.split(` `);
            going.push(command[0]);
        } else {
            command = command.split(` `);
            for (let i = 0; i < going.length; i++) {
                if (command[0] === going[i]) {
                    going.splice(i, 1);
                    continue;
                }
            }
        }
        for (let i = 0; i < going.length; i++) {
            if (command[0] === going[i]) {
                console.log(`${command[0]} is already in the list!`);
                break;
            } else {}
        }
    }
    console.log(going.join(`\n`));
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])