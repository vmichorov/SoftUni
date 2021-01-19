function addRemove(commandsArr) {
    let array = [];
    let count = 1;
    for (const command of commandsArr) {
        if (command == 'add') {
            array.push(count);
        } else if (command == 'remove') {
            array.pop();
        }
        count++;
    }
    if (array.length == 0) {
        console.log('Empty');
    } else {
        console.log(array.join('\n'));
    }
}

addRemove([
    'remove',
    'remove',
    'remove'
]);