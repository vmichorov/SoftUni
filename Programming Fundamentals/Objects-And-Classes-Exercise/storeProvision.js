function storeProvision(available, delivery) {
    let store = {};
    for (let i = 0; i < available.length; i += 2) {
        let product = available[i];
        store[product] = Number(available[i + 1]);
    }
    for (let i = 0; i < delivery.length; i += 2) {
        let product = delivery[i];
        if (store[product]) {
            store[product] += Number(delivery[i + 1]);
        } else {
            store[product] = Number(delivery[i + 1]);
        }
    }
    keys = Object.keys(store);
    for (let key of keys) {
        console.log(`${key} -> ${store[key]}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)