function partyTime(input) {
    let guests = {
        VIP: [],
        regular: []
    }
    let current = input.shift();
    while (current !== `PARTY`) {
        let firstEl = current[0];
        if (isNaN(firstEl)) {
            guests.regular.push(current);
        } else {
            guests.VIP.push(current);
        }
        current = input.shift();
    }
    for (current of input) {
        if (guests.VIP.includes(current)) {
            let index = guests.VIP.indexOf(current);
            guests.VIP.splice(index, 1);
        } else if (guests.regular.includes(current)) {
            let index = guests.regular.indexOf(current);
            guests.regular.splice(index, 1);
        }
    }
    console.log(guests.VIP.length + guests.regular.length);
    console.log(guests.VIP.join(`\n`));
    console.log(guests.regular.join(`\n`));
}

partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])