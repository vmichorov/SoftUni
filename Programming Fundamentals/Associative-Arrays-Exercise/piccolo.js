function piccolo(input) {
    let parking = {};
    for (let line of input) {
        let [direction, carNumber] = line.split(`, `);
        if (direction === `IN`) {
            parking[carNumber] = `inside`;
        } else {
            delete parking[carNumber];
        }
    }
    let sorted = Object.keys(parking).sort((a, b) => a.localeCompare(b));
    if (sorted.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        for (let el of sorted) {
            console.log(el);
        }
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])