function printNthElement(array, step) {
    let result = [];
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }
    return result;
}

console.log(printNthElement([
        '1',
        '2',
        '3',
        '4',
        '5'
    ],
    6
));