function storeCatalogue(array) {
    let catalogue = {};

    for (const element of array) {
        let [name, price] = element.split(' : ');
        let firstLetter = name[0];
        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = [];
        }
        catalogue[firstLetter].push({
            name,
            price: Number(price)
        });
        catalogue[firstLetter].sort((a, b) => (a.name).localeCompare(b.name));
    }
    let entries = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));
    for (const entry of entries) {
        console.log(entry[0]);
        let elements = entry[1];
        for (const element of elements) {
            console.log(`  ${element.name}: ${element.price}`);
        }
    }
}

// storeCatalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);

storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5 ",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
])