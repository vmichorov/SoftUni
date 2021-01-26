function calorieObject(array) {
    let products = {};
    for (let i = 0; i < array.length; i += 2) {
        products[array[i]] = Number(array[i + 1]);
    }
    console.log(products);
}

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);