function circleArea(input) {
    let result = 0;
    if (typeof input === 'number' && !isNaN(input)) {
        result = input ** 2 * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

circleArea(5);
circleArea('name');
circleArea(true);