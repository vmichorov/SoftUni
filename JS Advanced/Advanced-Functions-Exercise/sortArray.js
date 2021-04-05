function sortArray(array, type) {
    const types = {
        asc(arr) {
            arr.sort((a, b) => a - b);
        },
        desc(arr) {
            arr.sort((a, b) => b - a);
        },
    };
    types[type](array);
    return array;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));