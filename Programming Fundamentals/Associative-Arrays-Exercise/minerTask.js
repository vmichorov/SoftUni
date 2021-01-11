function minerTask(input) {
    let resources = {};
    for (let i = 0; i < input.length; i += 2) {
        let type = input[i];
        let qty = Number(input[i + 1]);
        if (!resources.hasOwnProperty(type)) {
            resources[type] = 0;
        }
        resources[type] += qty;
    }
    let keys = Object.keys(resources);
    for (let key of keys) {
        console.log(`${key} -> ${resources[key]}`);
    }
}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);