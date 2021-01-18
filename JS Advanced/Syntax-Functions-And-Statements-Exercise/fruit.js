function fruit(product, weight, kgPrice) {
    weight = weight / 1000;
    console.log(`I need $${(kgPrice * weight).toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${product}.`)
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);