function storage(input) {
    let storage = new Map();
    for (let line of input) {
        let [product, quantity] = line.split(` `);
        quantity = Number(quantity);
        if (!storage.has(product)) {
            storage.set(product, 0);
        }
        let existing = storage.get(product);
        storage.set(product, existing + quantity);
    }
    for (let key of storage) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);