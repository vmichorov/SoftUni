function rotateArray(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let element = array.pop();
        array.unshift(element);
    }
    console.log(array.join(' '));
}

rotateArray([
        'Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15
);